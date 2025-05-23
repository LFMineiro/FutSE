import { Link } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
    {/* <Image source="../assets/images/icon.jpeg" /> */}
      <Text style={styles.title}>Gerenciador de Torneios</Text>
      
      <Button title="Adicionar Torneio" onPress={() => {}} />
      <View style={styles.card}>
        <Text style={styles.subtitle}>Lista dos Torneios</Text>
        <Link href="/dashboard">
          <Text style={styles.link}>Ir para o Dashboard</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 10,
    color: "#000",
  },
  card: {
    backgroundColor: "#dcdcdc",
    padding: 20,
    width: "90%",
    borderRadius: 12,
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    color: "#1e90ff",
    marginTop: 10,
  },
});
