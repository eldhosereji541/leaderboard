import { Board } from "../components/leaderboarditem/LeaderboardItem";
import data from "./data.json";

const random = (min = 0, max = 1000) =>
  Math.floor(Math.random() * (max + 1)) + min;

let currentData:Board[] = [];

function mapWithRank(row:Board, i:number) {
  return { ...row, ranking: i + 1 };
}

export function getInitialData() {
  currentData = data.map(mapWithRank);
  return currentData;
}

export function generateNextData() {
  const nextData = [...currentData];
  const changes = random(0, 2);

  for (let i = 0; i < changes; i++) {
    const index = random(0, data.length - 1);
    nextData[index].score = nextData[index].score + random(1000, 5000);
  }

  currentData = nextData.sort((a, b) => b.score - a.score).map(mapWithRank);
  return currentData;
}
