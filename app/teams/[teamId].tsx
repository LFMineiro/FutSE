import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getPlayers } from "../../services/playersServices"; 
import { Player } from "@/types";

export default function TeamPage() {



  const { teamId } = useLocalSearchParams();
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await getPlayers(teamId as string) as Player[];
      setPlayers(data);
    };
    fetchPlayers();
  }, []);

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogadores do Time</Text>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <Text>Gols: {item.goals}</Text>
            <Text>Assistências: {item.assists}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  card: { padding: 12, borderBottomWidth: 1, borderColor: "#ccc" },
});
