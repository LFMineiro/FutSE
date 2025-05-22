import AddTeamModal from "@/components/Dashboard/modalAddTeam";
import { createTeam } from "@/services/teamServices";
import { useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Dashboard() {


  const [modalTeamVisible, setModalTeamVisible] = useState(false);
  const [modalPlayerVisible, setModalPlayerVisible] = useState(false);

  const [teamName, setTeamName] = useState("")

  const handleAddTeam = async (teamName : string) => {
      await createTeam(teamName)
      setModalTeamVisible(false)
      setTeamName("")
    
  }

   const filterTeams = () => {
        
    }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Resultados dos Jogos</Text>
        
        <View style={styles.resultCard}>
          <Text>Computadores 2 x 1 Cartógrafos</Text>
        </View>

        <View style={styles.buttonRow}>
          <Button title="Adicionar Jogador" onPress={() => {setModalPlayerVisible(true)}} />
          <Button title="Adicionar Equipe" onPress={() => {setModalTeamVisible(true)}}
           />

        </View>
      </View>

      {/* Equipes */}
      <View style={styles.section}>
        <Text style={styles.title}>Equipes do Torneio</Text>

        <View style={styles.teamCard}>
          <Text>Computadores</Text>
        </View>
        <View style={styles.teamCard}>
          <Text>Cartógrafos</Text>
        </View>
      </View>
      {/* Modais */}
      <AddTeamModal 
      visible={modalTeamVisible}
      onClose={() => {setModalTeamVisible(false)}}
      onSave={handleAddTeam}
      value={teamName}
      onChange={setTeamName}
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
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },
});
