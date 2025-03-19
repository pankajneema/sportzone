import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  // In a real app, this would fetch data from a database or external API
  const playersData = {
    "virat-kohli": {
      id: "virat-kohli",
      name: "Virat Kohli",
      image: "/images/players/virat-kohli.jpg",
      country: "India",
      role: "Batsman",
      ranking: 1,
      dateOfBirth: "November 5, 1988",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm medium",
      teams: ["India", "Royal Challengers Bangalore"],
      stats: {
        test: {
          matches: 106,
          runs: 8416,
          average: 49.95,
          strikeRate: 57.48,
          hundreds: 27,
          fifties: 28,
          highestScore: "254*",
        },
        odi: {
          matches: 275,
          runs: 12898,
          average: 57.32,
          strikeRate: 93.25,
          hundreds: 43,
          fifties: 65,
          highestScore: "183",
        },
        t20i: {
          matches: 115,
          runs: 4008,
          average: 52.73,
          strikeRate: 137.96,
          hundreds: 1,
          fifties: 37,
          highestScore: "122*",
        },
        ipl: {
          matches: 237,
          runs: 7263,
          average: 37.25,
          strikeRate: 130.02,
          hundreds: 7,
          fifties: 50,
          highestScore: "113",
        },
      },
      bio: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He is widely regarded as one of the greatest batsmen in the history of cricket and the best of the current generation. Known for his aggressive batting style and exceptional fitness, Kohli has broken numerous batting records and has been a pivotal figure in Indian cricket's success across all formats.",
    },
    "jasprit-bumrah": {
      id: "jasprit-bumrah",
      name: "Jasprit Bumrah",
      image: "/images/players/jasprit-bumrah.jpg",
      country: "India",
      role: "Bowler",
      ranking: 1,
      dateOfBirth: "December 6, 1993",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm fast",
      teams: ["India", "Mumbai Indians"],
      stats: {
        test: {
          matches: 32,
          wickets: 128,
          economy: 2.69,
          average: 21.99,
          bestBowling: "6/27",
          fiveWicketHauls: 8,
        },
        odi: {
          matches: 72,
          wickets: 121,
          economy: 4.63,
          average: 24.3,
          bestBowling: "5/27",
          fiveWicketHauls: 2,
        },
        t20i: {
          matches: 60,
          wickets: 70,
          economy: 6.62,
          average: 20.17,
          bestBowling: "3/11",
        },
        ipl: {
          matches: 120,
          wickets: 145,
          economy: 7.39,
          average: 23.31,
          bestBowling: "5/10",
          fiveWicketHauls: 1,
        },
      },
      bio: "Jasprit Bumrah is an Indian international cricketer who plays for the Indian national cricket team in all formats of the game. He is known for his unorthodox bowling action and ability to bowl yorkers at will, making him one of the most effective death bowlers in the world. Bumrah is the first Asian bowler to take five wickets in a Test innings in South Africa, England, and Australia during the same calendar year.",
    },
    "ben-stokes": {
      id: "ben-stokes",
      name: "Ben Stokes",
      image: "/images/players/ben-stokes.jpg",
      country: "England",
      role: "All-Rounder",
      ranking: 1,
      dateOfBirth: "June 4, 1991",
      battingStyle: "Left-handed",
      bowlingStyle: "Right-arm fast-medium",
      teams: ["England", "Rajasthan Royals", "Durham"],
      stats: {
        test: {
          matches: 89,
          runs: 5528,
          battingAverage: 36.0,
          wickets: 193,
          bowlingAverage: 32.07,
          highestScore: "258",
          bestBowling: "6/22",
        },
        odi: {
          matches: 105,
          runs: 2924,
          battingAverage: 38.99,
          wickets: 74,
          bowlingAverage: 42.39,
          highestScore: "102*",
          bestBowling: "5/61",
        },
        t20i: {
          matches: 43,
          runs: 487,
          battingAverage: 20.29,
          wickets: 19,
          bowlingAverage: 37.15,
          highestScore: "47",
          bestBowling: "3/26",
        },
      },
      bio: "Ben Stokes is an English international cricketer and current captain of the England Test team. Born in New Zealand, Stokes moved to England as a child. He is an all-rounder who bowls right-arm fast-medium pace and bats left-handed. He is known for his aggressive batting style and is one of the greatest all-rounders in cricket history. Stokes played a key role in England's victory in the 2019 Cricket World Cup Final, where he was named Man of the Match.",
    },
  }

  const player = playersData[id as keyof typeof playersData]

  if (!player) {
    return NextResponse.json({ error: "Player not found" }, { status: 404 })
  }

  return NextResponse.json(player)
}

