import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, this would fetch data from a database or external API
  const players = [
    {
      id: "virat-kohli",
      name: "Virat Kohli",
      image: "/images/players/virat-kohli.jpg",
      country: "India",
      role: "batsman",
      ranking: 1,
      stats: { matches: 102, runs: 3296, average: 51.5, strikeRate: 138.5 },
    },
    {
      id: "kane-williamson",
      name: "Kane Williamson",
      image: "/images/players/kane-williamson.jpg",
      country: "New Zealand",
      role: "batsman",
      ranking: 2,
      stats: { matches: 92, runs: 2927, average: 47.2, strikeRate: 125.3 },
    },
    {
      id: "joe-root",
      name: "Joe Root",
      image: "/images/players/joe-root.jpg",
      country: "England",
      role: "batsman",
      ranking: 3,
      stats: { matches: 89, runs: 2869, average: 45.6, strikeRate: 126.8 },
    },
    {
      id: "jasprit-bumrah",
      name: "Jasprit Bumrah",
      image: "/images/players/jasprit-bumrah.jpg",
      country: "India",
      role: "bowler",
      ranking: 1,
      stats: { matches: 67, wickets: 115, economy: 6.58, average: 19.3 },
    },
    {
      id: "kagiso-rabada",
      name: "Kagiso Rabada",
      image: "/images/players/kagiso-rabada.jpg",
      country: "South Africa",
      role: "bowler",
      ranking: 2,
      stats: { matches: 52, wickets: 96, economy: 7.12, average: 20.8 },
    },
    {
      id: "ben-stokes",
      name: "Ben Stokes",
      image: "/images/players/ben-stokes.jpg",
      country: "England",
      role: "all-rounder",
      ranking: 1,
      stats: { matches: 78, runs: 2123, wickets: 56, battingAvg: 33.7, bowlingAvg: 31.2 },
    },
    {
      id: "shakib-al-hasan",
      name: "Shakib Al Hasan",
      image: "/images/players/shakib-al-hasan.jpg",
      country: "Bangladesh",
      role: "all-rounder",
      ranking: 2,
      stats: { matches: 92, runs: 2348, wickets: 122, battingAvg: 31.3, bowlingAvg: 28.5 },
    },
    {
      id: "jos-buttler",
      name: "Jos Buttler",
      image: "/images/players/jos-buttler.jpg",
      country: "England",
      role: "wicket-keeper",
      ranking: 1,
      stats: { matches: 88, runs: 2569, dismissals: 124, average: 38.9, strikeRate: 144.2 },
    },
  ]

  return NextResponse.json({ players })
}

