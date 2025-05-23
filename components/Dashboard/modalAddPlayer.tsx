import { createPlayer } from "@/services/playersServices";
import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";


type ModalAddPlayerProps = {
  visible: boolean;
  onClose: () => void;
  teamId: string; 
  onPlayerAdded: () => void; 
};

export default function ModalAddPlayer({ visible, onClose, teamId, onPlayerAdded }: ModalAddPlayerProps) {
  const [playerName, setPlayerName] = useState("");

  const handleSave = async () => {
    if (!playerName.trim()) return;

    await createPlayer(teamId, playerName);
    setPlayerName("");
    onClose();
    onPlayerAdded(); 
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Adicionar Jogador</Text>
          <TextInput
            placeholder="Nome do jogador"
            style={styles.input}
            value={playerName}
            onChangeText={setPlayerName}
          />
          <Button title="Salvar" onPress={handleSave} />
          <Button title="Cancelar" onPress={onClose} color="#aaa" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 10,
    width: "80%",
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
});
