import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet } from 'react-native'
import { generateTournament } from '@/services/tournamentServices'
import { Match } from '@/types';


export default function tournamentPage() {

 const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const loadTournament = async () => {
      const data = await generateTournament();
      setMatches(data);
    };

    loadTournament();
  }, []);

  return (

    
    <View style={styles.container}>
      {matches.map((match) => (
        <View key={match.id} style={{ marginBottom: 20 }}>
          <Text>{match.team1} vs {match.team2}</Text>
        </View>
      ))}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})