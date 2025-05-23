export type Player = {
    id: string;
    name: string;
    goals: number;
    assists: number;
    };

export type Team = {
    id: string;
    name:string;
    createAt: any;
    }

export type Match ={
    team1: string
    team2: string
    team1Score?: number
    team2Score?: number
    id: string
}