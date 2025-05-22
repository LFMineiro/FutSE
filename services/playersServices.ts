import { db } from '../firebase/config';
import { collection, addDoc, Timestamp, query, getDocs, where } from 'firebase/firestore';

export const createPlayer = async(teamId: string, playerName: string) => {
    try{
        const docRef = await addDoc(collection(db, "players"), {
            name: playerName,
            teamId,
            goals: 0,
            assists: 0,
        })
        return docRef.id
        
    } catch (error) {
        console.error("Erro", error)
    }
}

export const getPlayers = async (teamId?: string) => {
  try {
    const playersRef = collection(db, "players");
    const q = teamId ? query(playersRef, where("teamId", "==", teamId)) : playersRef;
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Erro ao buscar jogadores", error);
    throw error;
  }
};


