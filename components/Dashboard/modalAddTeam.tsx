import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (text: string) => void;
  value: string;
  onChange: (text: string) => void;
  getTeams: () => void;
};

export default function AddTeamModal({ visible, onClose, onSave, value, onChange, getTeams }: Props) {


    const handleSave = () => {
        onSave(value)
        getTeams()
    }

   
  return (
    <Modal visible={visible} animationType="slide" transparent>
         <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Adicionar Equipe</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da equipe"
            value={value}
            onChangeText={onChange}
          />
          <View style={styles.modalButtons}>
            <Pressable onPress={handleSave} style={styles.modalButton}>
              <Text>Salvar</Text>
            </Pressable>
            <Pressable onPress={onClose} style={styles.modalButton}>
              <Text>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 6,
  },
});


