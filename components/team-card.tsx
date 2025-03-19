import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Trophy } from "lucide-react"

interface TeamCardProps {
  id: string
  name: string
  flag: string
  type: string
  ranking?: number
  trophies?: number
  league?: string
}

export default function TeamCard({ id, name, flag, type, ranking, trophies, league }: TeamCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-center mb-4">
          <Image src={flag || "/placeholder.svg"} width={90} height={60} alt={`${name} flag`} className="rounded" />
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
        <p className="text-sm text-slate-500 text-center">
          {type === "international" ? "International Team" : league || "Franchise Team"}
        </p>
        {ranking && (
          <div className="flex items-center justify-center gap-1 mt-2">
            <Trophy className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Ranking: {ranking}</span>
          </div>
        )}
        {trophies !== undefined && (
          <div className="flex items-center justify-center gap-1 mt-2">
            <Trophy className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">Trophies: {trophies}</span>
          </div>
        )}
        <Link
          href={`/teams/${id}`}
          className="block mt-4 text-sm text-blue-600 hover:text-blue-800 text-center font-medium"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  )
}

