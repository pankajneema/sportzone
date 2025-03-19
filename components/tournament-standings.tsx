import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Team {
  name: string
  played: number
  won: number
  lost: number
  points: number
  nrr: string
}

interface TournamentStandingsProps {
  tournament: string
  teams: Team[]
}

export default function TournamentStandings({ tournament, teams }: TournamentStandingsProps) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Team</TableHead>
            <TableHead className="text-center">P</TableHead>
            <TableHead className="text-center">W</TableHead>
            <TableHead className="text-center">L</TableHead>
            <TableHead className="text-center">Pts</TableHead>
            <TableHead className="text-center">NRR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={team.name} className={index < 4 ? "bg-emerald-50" : ""}>
              <TableCell className="font-medium">{team.name}</TableCell>
              <TableCell className="text-center">{team.played}</TableCell>
              <TableCell className="text-center">{team.won}</TableCell>
              <TableCell className="text-center">{team.lost}</TableCell>
              <TableCell className="text-center font-bold">{team.points}</TableCell>
              <TableCell className="text-center">{team.nrr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

