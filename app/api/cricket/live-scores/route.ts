export async function GET() {
  try {
      const data = await fetchFromOffset();
      console.log("Complete data received!", data);
      return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" }
      });
  } catch (error) {
      console.error("Error fetching data:", error);
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
      });
  }
}

async function fetchFromOffset() {
  try {
      const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=149a064e-18c5-417a-9714-a13969b4fd9e&offset=0`);
      const data = await response.json();
      
      if (data.status !== "success") {
          throw new Error("Failed to fetch data");
      }
      return data.data;
  } catch (error) {
      console.error("Fetch error:", error);
      return [];
  }
}
