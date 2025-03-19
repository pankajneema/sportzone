import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  // In a real app, this would fetch data from a database or external API
  const teamsData = {
    india: {
      id: "india",
      name: "India",
      flag: "/images/teams/india.jpg",
      type: "international",
      ranking: 1,
      captain: "Rohit Sharma",
      coach: "Rahul Dravid",
      homeGround: "Narendra Modi Stadium, Ahmedabad",
      iccTrophies: 5,
      players: [
        "Rohit Sharma",
        "Virat Kohli",
        "KL Rahul",
        "Rishabh Pant",
        "Hardik Pandya",
        "Ravindra Jadeja",
        "Jasprit Bumrah",
        "Mohammed Shami",
        "Kuldeep Yadav",
        "Yuzvendra Chahal",
      ],
      recentResults: [
        { opponent: "Australia", result: "Won", score: "India 240/4, Australia 235/10" },
        { opponent: "England", result: "Won", score: "England 210/8, India 211/4" },
        { opponent: "South Africa", result: "Lost", score: "India 280/8, South Africa 283/5" },
        { opponent: "New Zealand", result: "Won", score: "New Zealand 175/10, India 176/3" },
        { opponent: "Sri Lanka", result: "Won", score: "India 320/6, Sri Lanka 240/10" },
      ],
      upcomingMatches: [
        { opponent: "Pakistan", date: "25 Mar 2023", venue: "Dubai International Stadium" },
        { opponent: "Bangladesh", date: "28 Mar 2023", venue: "Eden Gardens, Kolkata" },
        { opponent: "Australia", date: "2 Apr 2023", venue: "Sydney Cricket Ground" },
      ],
      bio: "The India national cricket team represents India in international cricket. It is governed by the Board of Control for Cricket in India (BCCI) and is a Full Member of the International Cricket Council (ICC) with Test, One Day International (ODI) and Twenty20 International (T20I) status. Cricket has a rich history in India and the Indian cricket team has been one of the most successful cricket teams in recent years, winning the Cricket World Cup twice (1983 and 2011), the ICC World Twenty20 once (2007) and the ICC Champions Trophy once (2013).",
    },
    australia: {
      id: "australia",
      name: "Australia",
      flag: "/images/teams/australia.jpg",
      type: "international",
      ranking: 2,
      captain: "Pat Cummins",
      coach: "Andrew McDonald",
      homeGround: "Melbourne Cricket Ground",
      iccTrophies: 8,
      players: [
        "David Warner",
        "Steve Smith",
        "Marnus Labuschagne",
        "Glenn Maxwell",
        "Mitchell Marsh",
        "Alex Carey",
        "Pat Cummins",
        "Mitchell Starc",
        "Josh Hazlewood",
        "Adam Zampa",
      ],
      recentResults: [
        { opponent: "India", result: "Lost", score: "Australia 235/10, India 240/4" },
        { opponent: "England", result: "Won", score: "Australia 280/6, England 230/10" },
        { opponent: "South Africa", result: "Won", score: "South Africa 190/10, Australia 191/3" },
        { opponent: "New Zealand", result: "Won", score: "Australia 310/5, New Zealand 280/9" },
        { opponent: "Pakistan", result: "Won", score: "Pakistan 210/8, Australia 211/5" },
      ],
      upcomingMatches: [
        { opponent: "India", date: "2 Apr 2023", venue: "Sydney Cricket Ground" },
        { opponent: "England", date: "5 Apr 2023", venue: "Lord's Cricket Ground, London" },
        { opponent: "New Zealand", date: "10 Apr 2023", venue: "Eden Park, Auckland" },
      ],
      bio: "The Australia national cricket team represents Australia in international cricket. As the joint oldest team in Test cricket history, playing in the first ever Test match in 1877, the team also plays One-Day International (ODI) and Twenty20 International (T20I) cricket, participating in both the first ODI, against England in the 1970–71 season and the first T20I, against New Zealand in the 2004–05 season, winning both games. The team draws its players from teams playing in the Australian domestic competitions – the Sheffield Shield, the Australian domestic limited-overs cricket tournament and the Big Bash League.",
    },
  }

  const team = teamsData[id as keyof typeof teamsData]

  if (!team) {
    return NextResponse.json({ error: "Team not found" }, { status: 404 })
  }

  return NextResponse.json(team)
}

