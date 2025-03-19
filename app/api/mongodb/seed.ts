import clientPromise from "./connect"

export async function seedDatabase() {
  try {
    const client = await clientPromise
    const db = client.db("sports-score-website")

    // Clear existing collections
    await db.collection("matches").deleteMany({})
    await db.collection("teams").deleteMany({})
    await db.collection("players").deleteMany({})

    // Seed teams
    const teams = [
      {
        id: "india",
        name: "India",
        flag: "/images/teams/india.jpg",
        type: "international",
        ranking: 1,
        captain: "Rohit Sharma",
        coach: "Rahul Dravid",
        homeGround: "Narendra Modi Stadium, Ahmedabad",
        iccTrophies: 5,
        players: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Rishabh Pant", "Hardik Pandya"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "australia",
        name: "Australia",
        flag: "/images/teams/australia.jpg",
        type: "international",
        ranking: 2,
        captain: "Pat Cummins",
        coach: "Andrew McDonald",
        homeGround: "Melbourne Cricket Ground",
        iccTrophies: 8,
        players: ["David Warner", "Steve Smith", "Pat Cummins", "Mitchell Starc", "Josh Hazlewood"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more teams as needed
    ]

    await db.collection("teams").insertMany(teams)

    // Seed players
    const players = [
      {
        id: "virat-kohli",
        name: "Virat Kohli",
        image: "/images/players/virat-kohli.jpg",
        country: "India",
        role: "batsman",
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
        },
        bio: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "steve-smith",
        name: "Steve Smith",
        image: "/images/players/steve-smith.jpg",
        country: "Australia",
        role: "batsman",
        ranking: 4,
        dateOfBirth: "June 2, 1989",
        battingStyle: "Right-handed",
        bowlingStyle: "Right-arm leg break",
        teams: ["Australia", "Sydney Sixers", "Rajasthan Royals"],
        stats: {
          test: {
            matches: 97,
            runs: 8947,
            average: 58.94,
            strikeRate: 54.73,
            hundreds: 30,
            fifties: 37,
            highestScore: "239",
          },
          odi: {
            matches: 136,
            runs: 4662,
            average: 43.16,
            strikeRate: 87.25,
            hundreds: 12,
            fifties: 29,
            highestScore: "164",
          },
        },
        bio: "Steven Peter Devereux Smith is an Australian international cricketer and former captain of the Australian national team.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more players as needed
    ]

    await db.collection("players").insertMany(players)

    // Seed matches
    const matches = [
      {
        id: "ind-vs-aus-t20",
        matchType: "T20",
        team1: "India",
        team2: "Australia",
        team1Score: "186/4",
        team2Score: "120/7",
        overs: "15.2/20",
        status: "India needs 67 runs in 28 balls",
        team1Flag: "/images/teams/india.jpg",
        team2Flag: "/images/teams/australia.jpg",
        venue: "Melbourne Cricket Ground, Australia",
        date: "Mar 18, 2023",
        time: "19:00 IST",
        isLive: true,
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "eng-vs-sa-odi",
        matchType: "ODI",
        team1: "England",
        team2: "South Africa",
        team1Score: "245/8",
        team2Score: "180/3",
        overs: "32.4/50",
        status: "South Africa needs 66 runs in 104 balls",
        team1Flag: "/images/teams/england.jpg",
        team2Flag: "/images/teams/south-africa.jpg",
        venue: "Lord's Cricket Ground, London",
        date: "Mar 18, 2023",
        time: "14:30 IST",
        isLive: true,
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more matches as needed
    ]

    await db.collection("matches").insertMany(matches)

    console.log("Database seeded successfully")
    return { success: true }
  } catch (error) {
    console.error("Error seeding database:", error)
    return { success: false, error }
  }
}

