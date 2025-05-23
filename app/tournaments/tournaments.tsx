import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Image } from 'react-native'
import { generateGroupMatches } from '@/services/tournamentServices'
import { Match, Team } from '@/types';
import { getTeams } from '@/services/teamServices';


export default function tournamentPage() {

  const [groupAMatches, setGroupAMatches] = useState<Match[]>([])
  const [groupBMatches, setGroupBMatches] = useState<Match[]>([])

  useEffect(() => {
    const loadTournament = async () => {
      const data = await getTeams() as Team[]
      const matches = generateGroupMatches(data)
      const groupA = matches.filter(match => match.id.startsWith('A'))
      const groupB = matches.filter(match => match.id.startsWith('B'))
      setGroupAMatches(groupA)
      setGroupBMatches(groupB)
  }
  loadTournament()
}
  , []);

  return (


<ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/icon.jpeg')} style={styles.logo} />

      <Text style={styles.title}>Grupo A</Text>
      {groupAMatches.map(match => (
        <View key={match.id} style={styles.matchCard}>
          <Text style={styles.matchText}>
            {match.team1} {match.team1Score} x {match.team2Score} {match.team2}
          </Text>
        </View>
      ))}

      <Text style={styles.title}>Grupo B</Text>
      {groupBMatches.map(match => (
        <View key={match.id} style={styles.matchCard}>
          <Text style={styles.matchText}>
            {match.team1} {match.team1Score} x {match.team2Score} {match.team2}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  matchCard: {
    backgroundColor: '#e0e0ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  matchText: {
    fontSize: 16,
    fontWeight: '500',
  },
})