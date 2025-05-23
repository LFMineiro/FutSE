import { Match, Team } from "@/types";
import { getTeams } from "./teamServices"


export const generateTournament = async ():Promise<Match[]> => {
    const data = await getTeams() as Team[];
    const teams = data.map((team) => team.name) 
    const matches = []
    for (let i = 0; i < teams.length; i++) {
        for (let j = i + 1; j < teams.length; j++) {
            matches.push({
                team1: teams[i],
                team2: teams[j],
                id: `${teams[i]}-${teams[j]}`,
                team1Score: 0,
                team2Score: 0,
            })
        }
        
    }
    console.log("Jogos do torneio", matches)
    return matches
}