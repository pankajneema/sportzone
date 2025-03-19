import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Trophy } from "lucide-react"

interface PlayerCardProps {
  id: string
  name: string
  image: string
  country: string
  role: string
  ranking?: number
  stats?: any
}

export default function PlayerCard({ id, name, image, country, role, ranking, stats }: PlayerCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-slate-200">
            <Image
              src={image || "/placeholder.svg?height=96&width=96"}
              width={96}
              height={96}
              alt={name}
              className="object-cover"
            />
          </div>
        </div>
        <h3 className="text-lg font-bold text-center mb-1">{name}</h3>
        <p className="text-sm text-slate-500 text-center mb-2">
          {country} • {role}
        </p>

        {ranking && (
          <div className="flex items-center justify-center gap-1 mb-2">
            <Trophy className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Ranking: {ranking}</span>
          </div>
        )}

        {stats && (
          <div className="mt-3 pt-3 border-t border-slate-200">
            <div className="flex justify-between text-xs text-slate-600 mb-1">
              {role === "Batsman" && (
                <>
                  <span>Matches: {stats.matches}</span>
                  <span>Runs: {stats.runs}</span>
                </>
              )}
              {role === "Bowler" && (
                <>
                  <span>Matches: {stats.matches}</span>
                  <span>Wickets: {stats.wickets}</span>
                </>
              )}
              {role === "All-Rounder" && (
                <>
                  <span>Runs: {stats.runs}</span>
                  <span>Wickets: {stats.wickets}</span>
                </>
              )}
              {role === "Wicket-Keeper" && (
                <>
                  <span>Runs: {stats.runs}</span>
                  <span>Dismissals: {stats.dismissals}</span>
                </>
              )}
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              {role === "Batsman" && (
                <>
                  <span>Avg: {stats.average}</span>
                  <span>SR: {stats.strikeRate}</span>
                </>
              )}
              {role === "Bowler" && (
                <>
                  <span>Econ: {stats.economy}</span>
                  <span>Avg: {stats.average}</span>
                </>
              )}
              {role === "All-Rounder" && (
                <>
                  <span>Bat Avg: {stats.battingAvg}</span>
                  <span>Bowl Avg: {stats.bowlingAvg}</span>
                </>
              )}
              {role === "Wicket-Keeper" && (
                <>
                  <span>Avg: {stats.average}</span>
                  <span>SR: {stats.strikeRate}</span>
                </>
              )}
            </div>
          </div>
        )}

        <Link
          href={`/players/${id}`}
          className="block mt-4 text-sm text-blue-600 hover:text-blue-800 text-center font-medium"
        >
          View Profile
        </Link>
      </CardContent>
    </Card>
  )
}

