import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        console.log("id ====>  ",id);
        if (!id) {
            return NextResponse.json({ error: "Match ID is required" }, { status: 400 });
        }

        const match = await fetchMatchDetails(id);

        if (!match) {
            return NextResponse.json({ error: "Match not found" }, { status: 404 });
        }

        return NextResponse.json(match);
    } catch (error) {
        console.error("Error fetching match details:", error);
        return NextResponse.json({ error: "Failed to fetch match details" }, { status: 500 });
    }
}

async function fetchMatchDetails(id) {
    try {
        const API_KEY = '149a064e-18c5-417a-9714-a13969b4fd9e';

        const response = await fetch(`https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&offset=0&id=${id}`);
        const data = await response.json();
        console.log("API RES==>   ",data)
        if (data.status !== "success" || !data.data) {
            return null;
        }
        return data.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}


