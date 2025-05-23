import { Match, Team } from "@/types";
import { getTeams } from "./teamServices"
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const saveTournamentMatches = async (matches: Match[]) => {
  const matchesRef = collection(db, "matches");

  for (const match of matches) {
    const matchRef = doc(matchesRef, match.id);
    await setDoc(matchRef, match);
  }
};

export const updateMatchScore = async (
  matchId: string,
  team1Score: number,
  team2Score: number
) => {
  const matchRef = doc(db, "matches");
  await updateDoc(matchRef, { team1Score, team2Score });
};


export const generateGroupMatches = (teams: Team[]): Match[] => {
  if (teams.length !== 8) throw new Error("Precisamos exatamente de 8 times para dividir em dois grupos");

  // 1. Divisão fixa em grupos (poderia ser aleatória também)
  const groupA = teams.slice(0, 4);
  const groupB = teams.slice(4, 8);

  const generateMatches = (group: Team[], groupLabel: string): Match[] => {
    const matches: Match[] = [];
    for (let i = 0; i < group.length; i++) {
      for (let j = i + 1; j < group.length; j++) {
        const match: Match = {
          id: `${groupLabel}-${group[i].name}-${group[j].name}`,
          team1: group[i].name,
          team2: group[j].name,
          team1Score: 0,
          team2Score: 0,
        };
        matches.push(match);
      }
    }
    return matches;
  };

  const groupAMatches = generateMatches(groupA, "A");
  const groupBMatches = generateMatches(groupB, "B");

  return [...groupAMatches, ...groupBMatches];
};
