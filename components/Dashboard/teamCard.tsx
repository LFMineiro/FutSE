import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Team } from '@/types';
import { deleteTeam } from '@/services/teamServices';

type TeamCardProps = {
  team: Team;
  setSelectedTeam: (id: string) => void;
  setModalPlayerVisible: (visible: boolean) => void;
  onEdit?: (team: Team) => void; // callback externo opcional
  onDelete?: () => void; // para atualizar a lista após deletar
};

const TeamCard: React.FC<TeamCardProps> = ({
  team,
  setSelectedTeam,
  setModalPlayerVisible,
  onEdit,
  onDelete,
}) => {
  const router = useRouter();

  const handleDelete = () => {
    Alert.alert(
      'Excluir Time',
      `Deseja realmente excluir o time "${team.name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await deleteTeam(team.id);
            if (onDelete) onDelete();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.teamCard}>
      <Text style={styles.teamTitle}>{team.name}</Text>
      <View style={styles.buttonRow}>
        <Button
          title="Adicionar Jogador"
          onPress={() => {
            setSelectedTeam(team.id);
            setModalPlayerVisible(true);
          }}
        />
        <Button
          title="Ver Time"
          onPress={() => router.push(`/teams/${team.id}`)}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          title="Editar"
          onPress={() => {
            if (onEdit) onEdit(team);
          }}
        />
        <Button
          title="Excluir"
          color="red"
          onPress={handleDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamCard: {
    backgroundColor: '#cde',
    padding: 10,
    flex: 1,
    gap: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  teamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    gap: 10,
  },
});

export default TeamCard;
