import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export const createTeam = async(teamName: string) => {
    try{
        const docRef = await addDoc(collection(db, "teams"), {
            name: teamName,
            createAt: Timestamp.now(),
        })
        console.log("Id da equipe:" , docRef.id)
        return docRef.id
        
    } catch (error) {
        console.error("Erro", error)
    }
}

export const fetchTeams = async () => {
    const teamsCollection = collection(db, "teams")
    
}