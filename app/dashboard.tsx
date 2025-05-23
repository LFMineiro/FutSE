import AddPlayerModal from "@/components/Dashboard/modalAddPlayer";
import AddTeamModal from "@/components/Dashboard/modalAddTeam";
import TeamCard from "@/components/Dashboard/teamCard";
import { db } from "@/firebase/config";
import { getPlayers } from "@/services/playersServices";
import { createTeam, getTeams } from "@/services/teamServices";
import { Team } from "@/types";
import { useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Dashboard() {

 

  const router = useRouter()

  const [modalTeamVisible, setModalTeamVisible] = useState(false);
  const [modalPlayerVisible, setModalPlayerVisible] = useState(false);

  const [teamName, setTeamName] = useState("")
  const [playerName, setPlayerName] = useState("")
  const [teams, setTeams] = useState<Team[]>([])
  const [selectedTeam, setSelectedTeam] = useState("")
  


  const handleAddTeam = async (teamName : string) => {
      await createTeam(teamName)
      setModalTeamVisible(false)
      setTeamName("")
      fetchTeams()
    
  }
  const handleAddPlayer = async (teamName: string) => {
      await createTeam(teamName)
      setModalTeamVisible(false)
      setTeamName("")
    
  }
  {/* Foi usado o as Team[] para força a tipagem correta, já que estava dando erro*/}
  const fetchTeams = async() => {
   const data = await getTeams() as Team[]
   setTeams(data)
  }
    useEffect(() => {
      fetchTeams()
    }, [])




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Resultados dos Jogos</Text>
        
        <View style={styles.resultCard}>
          <Text>Computadores 2 x 1 Cartógrafos</Text>
        </View>

        <View style={styles.buttonRow}>
          {/* <Button title="Adicionar Jogador" onPress={() => {setModalPlayerVisible(true)}} /> */}
          <Button title="Adicionar Equipe" onPress={() => {setModalTeamVisible(true)}}
           />

        </View>
      </View>

      {/* Equipes */}
      <ScrollView style={styles.section}>
        <Text style={styles.title}>Equipes do Torneio</Text>

          {teams.map((team)  => (
            <TeamCard 
            key={team.id}
          team={team}
          setSelectedTeam={setSelectedTeam}
          setModalPlayerVisible={setModalPlayerVisible}/>
          )
          )}
      </ScrollView>

      {/* Modais */}
      <AddTeamModal 
      visible={modalTeamVisible}
      onClose={() => {setModalTeamVisible(false)}}
      onSave={handleAddTeam}
      value={teamName}
      onChange={setTeamName}
      getTeams={getTeams}
        />
        <AddPlayerModal 
        visible={modalPlayerVisible}
        onClose = {() => {setModalPlayerVisible(false)}}
        teamId = {selectedTeam}
        onPlayerAdded = {getPlayers}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultCard: {
    backgroundColor: "#e6e6e6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  teamCard: {
    backgroundColor: "#cde",
    padding: 10,
    flex:1,
    gap: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  teamTitle: {
    flex: 1,
    fontSize:18,
    fontWeight: 'bold',

  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },
});
