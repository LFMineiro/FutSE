import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
  value: string;
  onChange: (text: string) => void;
};

export default function AddPlayerModal({ visible, onClose, onSave, value, onChange }: Props) {


  return (
    <Modal visible={visible} animationType="slide" transparent>
         <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Adicionar Jogador</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do Jogador"
            value={value}
            onChangeText={onChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do Jogador"
            value={value}
            onChangeText={onChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do Jogador"
            value={value}
            onChangeText={onChange}
          />
          <View style={styles.modalButtons}>
            <Pressable onPress={onSave} style={styles.modalButton}>
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


