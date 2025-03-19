import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"

interface UpcomingMatchCardProps {
  matchType: string
  team1: string
  team2: string
  date: string
  time: string
  venue: string
  team1Flag: string
  team2Flag: string
}

export default function UpcomingMatchCard({
  matchType,
  team1,
  team2,
  date,
  time,
  venue,
  team1Flag,
  team2Flag,
}: UpcomingMatchCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-3 flex justify-between items-center">
          <Badge variant="outline" className="bg-white/20 text-white border-none hover:bg-white/30">
            {matchType}
          </Badge>
          <Badge variant="outline" className="bg-blue-500 text-white border-none hover:bg-blue-600">
            Upcoming
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
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CalendarDays className="h-4 w-4 text-blue-600" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>{venue}</span>
            </div>
          </div>
          <Link
            href={`/match/${team1.toLowerCase()}-vs-${team2.toLowerCase()}`}
            className="flex items-center justify-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Match Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

