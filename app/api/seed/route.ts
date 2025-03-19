import { NextResponse } from "next/server"
import { seedDatabase } from "../mongodb/seed"

export async function GET() {
  try {
    // const result = await seedDatabase()

    // if (result.success) {
    //   return NextResponse.json({ message: "Database seeded successfully" })
    // } else {
    //   return NextResponse.json({ error: "Failed to seed database", details: result.error }, { status: 500 })
    // }
    console.log("HEHHEHEHEHE")
    return NextResponse.json({ error: "Failed to seed database", details: "me error hu " }, { status: 500 })

  } catch (error) {
    return NextResponse.json({ error: "Internal server error", details: error }, { status: 500 })
  }
}

