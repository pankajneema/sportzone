import { NextResponse } from "next/server"

// In a real app, this would fetch data from a cricket API
// and implement API key rotation logic
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const tournament = searchParams.get("tournament") || "ipl"

  // Simulate API response with more detailed data
  const tournamentData = {
    ipl: {
      name: "IPL 2023",
      teams: [
        { name: "Gujarat Titans", played: 14, won: 10, lost: 4, points: 20, nrr: "+0.809", qualified: "Playoffs" },
        { name: "Chennai Super Kings", played: 14, won: 8, lost: 6, points: 16, nrr: "+0.652", qualified: "Playoffs" },
        { name: "Mumbai Indians", played: 14, won: 8, lost: 6, points: 16, nrr: "+0.445", qualified: "Playoffs" },
        { name: "Rajasthan Royals", played: 14, won: 7, lost: 7, points: 14, nrr: "+0.333", qualified: "Playoffs" },
        { name: "Royal Challengers", played: 14, won: 7, lost: 7, points: 14, nrr: "+0.172", qualified: null },
        { name: "Lucknow Super Giants", played: 14, won: 7, lost: 7, points: 14, nrr: "+0.082", qualified: null },
        { name: "Kolkata Knight Riders", played: 14, won: 6, lost: 8, points: 12, nrr: "+0.146", qualified: null },
        { name: "Punjab Kings", played: 14, won: 6, lost: 8, points: 12, nrr: "-0.304", qualified: null },
        { name: "Delhi Capitals", played: 14, won: 5, lost: 9, points: 10, nrr: "-0.572", qualified: null },
        { name: "Sunrisers Hyderabad", played: 14, won: 4, lost: 10, points: 8, nrr: "-0.590", qualified: null },
      ],
      topRunScorers: [
        { name: "Shubman Gill", team: "Gujarat Titans", matches: 14, runs: 890, average: 59.33, strikeRate: 157.8 },
        { name: "Virat Kohli", team: "Royal Challengers", matches: 14, runs: 639, average: 53.25, strikeRate: 139.82 },
        {
          name: "Devon Conway",
          team: "Chennai Super Kings",
          matches: 14,
          runs: 625,
          average: 52.08,
          strikeRate: 138.89,
        },
      ],
      topWicketTakers: [
        { name: "Mohammed Shami", team: "Gujarat Titans", matches: 14, wickets: 28, economy: 8.03, average: 18.64 },
        { name: "Rashid Khan", team: "Gujarat Titans", matches: 14, wickets: 27, economy: 8.24, average: 20.81 },
        { name: "Piyush Chawla", team: "Mumbai Indians", matches: 14, wickets: 22, economy: 8.11, average: 26.0 },
      ],
    },
    "t20-world-cup": {
      name: "T20 World Cup 2023",
      teams: [
        { name: "India", played: 5, won: 5, lost: 0, points: 10, nrr: "+2.353", qualified: "Super 8" },
        { name: "England", played: 5, won: 4, lost: 1, points: 8, nrr: "+1.862", qualified: "Super 8" },
        { name: "Australia", played: 5, won: 4, lost: 1, points: 8, nrr: "+1.216", qualified: "Super 8" },
        { name: "South Africa", played: 5, won: 3, lost: 2, points: 6, nrr: "+0.874", qualified: "Super 8" },
        { name: "New Zealand", played: 5, won: 3, lost: 2, points: 6, nrr: "+0.743", qualified: null },
        { name: "Pakistan", played: 5, won: 2, lost: 3, points: 4, nrr: "-0.375", qualified: null },
        { name: "West Indies", played: 5, won: 2, lost: 3, points: 4, nrr: "-0.562", qualified: null },
        { name: "Sri Lanka", played: 5, won: 1, lost: 4, points: 2, nrr: "-1.026", qualified: null },
        { name: "Bangladesh", played: 5, won: 1, lost: 4, points: 2, nrr: "-1.176", qualified: null },
        { name: "Afghanistan", played: 5, won: 0, lost: 5, points: 0, nrr: "-1.825", qualified: null },
      ],
      topRunScorers: [
        { name: "Virat Kohli", team: "India", matches: 5, runs: 296, average: 74.0, strikeRate: 147.26 },
        { name: "Jos Buttler", team: "England", matches: 5, runs: 269, average: 67.25, strikeRate: 151.12 },
        { name: "David Warner", team: "Australia", matches: 5, runs: 242, average: 48.4, strikeRate: 142.35 },
      ],
      topWicketTakers: [
        { name: "Jasprit Bumrah", team: "India", matches: 5, wickets: 12, economy: 5.08, average: 10.25 },
        { name: "Adil Rashid", team: "England", matches: 5, wickets: 11, economy: 6.12, average: 12.36 },
        { name: "Mitchell Starc", team: "Australia", matches: 5, wickets: 10, economy: 7.24, average: 15.7 },
      ],
    },
  }

  return NextResponse.json(tournamentData[tournament as keyof typeof tournamentData] || tournamentData.ipl)
}

