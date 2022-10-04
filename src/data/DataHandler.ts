import { Board } from "../components/leaderboarditem/LeaderboardItem";
import data from "./data.json";

const random = (min = 0, max = 1000) =>
  Math.floor(Math.random() * (max + 1)) + min;

let gameData:Board[] = [];

export function getInitialData() {
  gameData = data.map((row:Board, i:number)=> {
    return { ...row, ranking: i + 1 };
  });
  return gameData;
}

export function generateNextData() {
  const nextData = [...gameData];
  const changes = random(0,2);

  for (let i = 0; i < changes; i++) {
    const index = random(0, data.length - 1);
    nextData[index].score = nextData[index].score + random(1000, 6000);
  }
  gameData = nextData.sort((a, b) => b.score - a.score).map((row:Board, i:number)=> {
    return { ...row, ranking: i + 1 };
  });
  return gameData;
}
