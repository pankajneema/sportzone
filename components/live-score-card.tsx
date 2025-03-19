import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface LiveScoreCardProps {
  id: string
  name: string
  matchType: string
  status: string
  venue: string
  date: string
  teams: string[]
  score?: Array<{
    r: number
    w: number
    o: number
    inning: string
  }>
  teamInfo?: Array<{
    name: string
    shortname: string
    img: string
  }>
  isCompleted?: boolean
}

export default function LiveScoreCard({
  id,
  name,
  matchType,
  status,
  venue,
  date,
  teams,
  score,
  teamInfo,
  isCompleted = false,
}: LiveScoreCardProps) {
  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  // Get team names and flags
  const team1 = teams[0]
  const team2 = teams[1]
  console.log(team1,team2);
  const team1Flag = teamInfo?.[0]?.img || `/images/teams/${team1}.png?height=30&width=45`
  const team2Flag = teamInfo?.[1]?.img || `/images/teams/${team2}.png?height=30&width=45`
  // matchData.team1Flag =  `/images/teams/${team1}.png?height=60&width=90`
  // Get scores
  const team1Score = score?.[0] ? `${score[0].r}/${score[0].w}` : ""
  const team2Score = score?.[1] ? `${score[1].r}/${score[1].w}` : ""
  const team1Overs = score?.[0] ? `(${score[0].o} ov)` : ""
  const team2Overs = score?.[1] ? `(${score[1].o} ov)` : ""

  // Determine if match is completed
  const matchEnded = status.includes("won") || status.includes("joint winners")

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-3 flex justify-between items-center">
          <Badge variant="outline" className="bg-white/20 text-white border-none hover:bg-white/30">
            {matchType.toUpperCase()}
          </Badge>
          <Badge
            variant="outline"
            className={`${
              matchEnded ? "bg-slate-600" : "bg-red-500 animate-pulse"
            } text-white border-none hover:bg-red-600`}
          >
            {matchEnded ? "Completed" : "Live"}
          </Badge>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Image
                  src={team1Flag || "/placeholder.svg"}
                  width={45}
                  height={30}
                  alt={`${team1} flag`}
                  className="rounded"
                />
              </div>
              <h3 className="font-bold">{team1}</h3>
              <p className="text-lg font-semibold text-emerald-600">{team1Score}</p>
              <p className="text-xs text-slate-500">{team1Overs}</p>
            </div>
            <div className="text-center text-slate-500 text-sm font-medium">VS</div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Image
                  src={team2Flag || "/placeholder.svg"}
                  width={45}
                  height={30}
                  alt={`${team2} flag`}
                  className="rounded"
                />
              </div>
              <h3 className="font-bold">{team2}</h3>
              <p className="text-lg font-semibold text-emerald-600">{team2Score}</p>
              <p className="text-xs text-slate-500">{team2Overs}</p>
            </div>
          </div>
          <div className="text-center mb-3">
            <p className="text-sm text-slate-500">{venue}</p>
            <p className="text-sm font-medium text-slate-700">{status}</p>
          </div>
          <Link
            href={`/match/${id}`}
            className="flex items-center justify-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

