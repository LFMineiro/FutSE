import { db } from '../firebase/config';
import { collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';

export const createTeam = async(teamName: string) => {
    try{
        const docRef = await addDoc(collection(db, "teams"), {
            name: teamName,
            wins: 0,
            loses: 0,
            draws: 0,
            createAt: Timestamp.now(),
        })
        console.log("Id da equipe:" , docRef.id)
        return docRef.id
        
    } catch (error) {
        console.error("Erro", error)
    }
}

   export const getTeams = async () => {
      const data = await getDocs(collection(db, "teams"));
      return data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) 
    }


// TENHO QUE PENSAR AGORA EM COMO ESTRUTURAR O BANCO DE DADOS VISTO QUE O TIME VAI TER JOGADORES QUE VÃO TER ATRIBUTOS DIVERSOS PARA SEREM SALVOS

/* TEAMS: {
        teamName
        wins: number
        loses: number
        draws: number
}


}
 
    Lógica para guardar resultados dos jogos

    GAMES: {
        results: {
        }}

*/
