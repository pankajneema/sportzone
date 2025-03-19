import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Trophy, Flag, Calendar, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function PlayerDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch player data based on the ID
  const playerData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cricket/players/${params.id}`,
    { next: { revalidate: 3600 } },
  )
    .then((res) => res.json())
    .catch(() => null)

  // Fallback data if API fails
  const player = playerData || {
    id: "virat-kohli",
    name: "Virat Kohli",
    image: "/images/players/virat-kohli.jpg",
    country: "India",
    role: "Batsman",
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
      t20i: {
        matches: 115,
        runs: 4008,
        average: 52.73,
        strikeRate: 137.96,
        hundreds: 1,
        fifties: 37,
        highestScore: "122*",
      },
      ipl: {
        matches: 237,
        runs: 7263,
        average: 37.25,
        strikeRate: 130.02,
        hundreds: 7,
        fifties: 50,
        highestScore: "113",
      },
    },
    bio: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He is widely regarded as one of the greatest batsmen in the history of cricket and the best of the current generation. Known for his aggressive batting style and exceptional fitness, Kohli has broken numerous batting records and has been a pivotal figure in Indian cricket's success across all formats.",
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 text-transparent bg-clip-text">
              ScoreZone
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Home
            </Link>
            <Link href="/live-scores" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Live Scores
            </Link>
            <Link href="/schedule" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Schedule
            </Link>
            <Link href="/teams" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Teams
            </Link>
            <Link href="/players" className="text-sm font-medium text-emerald-700 hover:text-emerald-900">
              Players
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-6">
          <div className="mb-6">
            <Link href="/players" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Players
            </Link>
          </div>

          <Card className="mb-6 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 text-white">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white/20">
                    <Image
                      src={player.image || "/placeholder.svg?height=128&width=128"}
                      width={128}
                      height={128}
                      alt={player.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Flag className="h-4 w-4" />
                        <span>{player.country}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span>{player.role}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{player.dateOfBirth}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4" />
                        <span>Ranking: #{player.ranking}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h2 className="text-lg font-bold mb-3">Player Information</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Full Name</span>
                        <span className="font-medium">{player.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Country</span>
                        <span className="font-medium">{player.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Date of Birth</span>
                        <span className="font-medium">{player.dateOfBirth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Batting Style</span>
                        <span className="font-medium">{player.battingStyle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Bowling Style</span>
                        <span className="font-medium">{player.bowlingStyle}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold mb-3">Teams</h2>
                    <div className="space-y-2">
                      {player.teams.map((team: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            {index + 1}
                          </div>
                          <span>{team}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-3">Biography</h2>
                  <p className="text-slate-700">{player.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Career Statistics</h2>
              <Tabs defaultValue="test" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger
                    value="test"
                    className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
                  >
                    Test
                  </TabsTrigger>
                  <TabsTrigger
                    value="odi"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
                  >
                    ODI
                  </TabsTrigger>
                  <TabsTrigger
                    value="t20i"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    T20I
                  </TabsTrigger>
                  <TabsTrigger
                    value="ipl"
                    className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
                  >
                    IPL
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="test">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Matches</th>
                          <th className="text-left py-2 px-4">Runs</th>
                          <th className="text-left py-2 px-4">Average</th>
                          <th className="text-left py-2 px-4">Strike Rate</th>
                          <th className="text-left py-2 px-4">100s</th>
                          <th className="text-left py-2 px-4">50s</th>
                          <th className="text-left py-2 px-4">Highest Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4">{player.stats.test.matches}</td>
                          <td className="py-2 px-4">{player.stats.test.runs}</td>
                          <td className="py-2 px-4">{player.stats.test.average}</td>
                          <td className="py-2 px-4">{player.stats.test.strikeRate}</td>
                          <td className="py-2 px-4">{player.stats.test.hundreds}</td>
                          <td className="py-2 px-4">{player.stats.test.fifties}</td>
                          <td className="py-2 px-4">{player.stats.test.highestScore}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="odi">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Matches</th>
                          <th className="text-left py-2 px-4">Runs</th>
                          <th className="text-left py-2 px-4">Average</th>
                          <th className="text-left py-2 px-4">Strike Rate</th>
                          <th className="text-left py-2 px-4">100s</th>
                          <th className="text-left py-2 px-4">50s</th>
                          <th className="text-left py-2 px-4">Highest Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4">{player.stats.odi.matches}</td>
                          <td className="py-2 px-4">{player.stats.odi.runs}</td>
                          <td className="py-2 px-4">{player.stats.odi.average}</td>
                          <td className="py-2 px-4">{player.stats.odi.strikeRate}</td>
                          <td className="py-2 px-4">{player.stats.odi.hundreds}</td>
                          <td className="py-2 px-4">{player.stats.odi.fifties}</td>
                          <td className="py-2 px-4">{player.stats.odi.highestScore}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="t20i">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Matches</th>
                          <th className="text-left py-2 px-4">Runs</th>
                          <th className="text-left py-2 px-4">Average</th>
                          <th className="text-left py-2 px-4">Strike Rate</th>
                          <th className="text-left py-2 px-4">100s</th>
                          <th className="text-left py-2 px-4">50s</th>
                          <th className="text-left py-2 px-4">Highest Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4">{player.stats.t20i.matches}</td>
                          <td className="py-2 px-4">{player.stats.t20i.runs}</td>
                          <td className="py-2 px-4">{player.stats.t20i.average}</td>
                          <td className="py-2 px-4">{player.stats.t20i.strikeRate}</td>
                          <td className="py-2 px-4">{player.stats.t20i.hundreds}</td>
                          <td className="py-2 px-4">{player.stats.t20i.fifties}</td>
                          <td className="py-2 px-4">{player.stats.t20i.highestScore}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="ipl">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Matches</th>
                          <th className="text-left py-2 px-4">Runs</th>
                          <th className="text-left py-2 px-4">Average</th>
                          <th className="text-left py-2 px-4">Strike Rate</th>
                          <th className="text-left py-2 px-4">100s</th>
                          <th className="text-left py-2 px-4">50s</th>
                          <th className="text-left py-2 px-4">Highest Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4">{player.stats.ipl.matches}</td>
                          <td className="py-2 px-4">{player.stats.ipl.runs}</td>
                          <td className="py-2 px-4">{player.stats.ipl.average}</td>
                          <td className="py-2 px-4">{player.stats.ipl.strikeRate}</td>
                          <td className="py-2 px-4">{player.stats.ipl.hundreds}</td>
                          <td className="py-2 px-4">{player.stats.ipl.fifties}</td>
                          <td className="py-2 px-4">{player.stats.ipl.highestScore}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-emerald-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 text-transparent bg-clip-text">
                  ScoreZone
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Your one-stop destination for live cricket scores, stats, and updates from around the world.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/live-scores" className="text-slate-600 hover:text-emerald-600">
                    Live Scores
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-slate-600 hover:text-emerald-600">
                    Match Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/teams" className="text-slate-600 hover:text-emerald-600">
                    Teams
                  </Link>
                </li>
                <li>
                  <Link href="/players" className="text-slate-600 hover:text-emerald-600">
                    Players
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-slate-600 hover:text-emerald-600">
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Tournaments</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tournaments/ipl" className="text-slate-600 hover:text-emerald-600">
                    IPL
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments/world-cup" className="text-slate-600 hover:text-emerald-600">
                    ICC World Cup
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments/t20-world-cup" className="text-slate-600 hover:text-emerald-600">
                    T20 World Cup
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments/asia-cup" className="text-slate-600 hover:text-emerald-600">
                    Asia Cup
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments/big-bash" className="text-slate-600 hover:text-emerald-600">
                    Big Bash League
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Subscribe</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get the latest cricket updates and news delivered straight to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-slate-500">
            <p>© 2023 ScoreZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

