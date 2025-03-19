import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trophy, Search, Filter } from "lucide-react"
import Link from "next/link"
import SportSelector from "@/components/sport-selector"
import PlayerCard from "@/components/player-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function PlayersPage() {
  // In a real app, we would fetch this data from the API
  const players = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/cricket/players`, {
    next: { revalidate: 3600 },
  })
    .then((res) => res.json())
    .then((data) => data.players)
    .catch(() => [])

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Cricket Players</h1>
              <p className="text-slate-600 mt-1">Explore cricket players from around the world</p>
            </div>
            <SportSelector />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input type="search" placeholder="Search players..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="w-full md:w-auto">
                Sort
              </Button>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <Tabs defaultValue="batsmen" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger
                    value="batsmen"
                    className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
                  >
                    Batsmen
                  </TabsTrigger>
                  <TabsTrigger
                    value="bowlers"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
                  >
                    Bowlers
                  </TabsTrigger>
                  <TabsTrigger
                    value="all-rounders"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    All-Rounders
                  </TabsTrigger>
                  <TabsTrigger
                    value="wicket-keepers"
                    className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
                  >
                    Wicket-Keepers
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="batsmen" className="space-y-4">
                  <h2 className="text-xl font-bold mb-4">Top Batsmen</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {players && players.length > 0 ? (
                      players
                        .filter((player: any) => player.role === "batsman")
                        .map((player: any) => (
                          <PlayerCard
                            key={player.id}
                            id={player.id}
                            name={player.name}
                            image={player.image}
                            country={player.country}
                            role={player.role}
                            ranking={player.ranking}
                            stats={player.stats}
                          />
                        ))
                    ) : (
                      <>
                        <PlayerCard
                          id="virat-kohli"
                          name="Virat Kohli"
                          image="/images/players/virat-kohli.jpg"
                          country="India"
                          role="Batsman"
                          ranking={1}
                          stats={{ matches: 102, runs: 3296, average: 51.5, strikeRate: 138.5 }}
                        />
                        <PlayerCard
                          id="kane-williamson"
                          name="Kane Williamson"
                          image="/images/players/kane-williamson.jpg"
                          country="New Zealand"
                          role="Batsman"
                          ranking={2}
                          stats={{ matches: 92, runs: 2927, average: 47.2, strikeRate: 125.3 }}
                        />
                        <PlayerCard
                          id="joe-root"
                          name="Joe Root"
                          image="/images/players/joe-root.jpg"
                          country="England"
                          role="Batsman"
                          ranking={3}
                          stats={{ matches: 89, runs: 2869, average: 45.6, strikeRate: 126.8 }}
                        />
                        <PlayerCard
                          id="steve-smith"
                          name="Steve Smith"
                          image="/images/players/steve-smith.jpg"
                          country="Australia"
                          role="Batsman"
                          ranking={4}
                          stats={{ matches: 88, runs: 2785, average: 44.9, strikeRate: 129.7 }}
                        />
                        <PlayerCard
                          id="babar-azam"
                          name="Babar Azam"
                          image="/images/players/babar-azam.jpg"
                          country="Pakistan"
                          role="Batsman"
                          ranking={5}
                          stats={{ matches: 80, runs: 2686, average: 47.1, strikeRate: 134.2 }}
                        />
                        <PlayerCard
                          id="rohit-sharma"
                          name="Rohit Sharma"
                          image="/images/players/rohit-sharma.jpg"
                          country="India"
                          role="Batsman"
                          ranking={6}
                          stats={{ matches: 125, runs: 3853, average: 43.3, strikeRate: 139.8 }}
                        />
                        <PlayerCard
                          id="david-warner"
                          name="David Warner"
                          image="/images/players/david-warner.jpg"
                          country="Australia"
                          role="Batsman"
                          ranking={7}
                          stats={{ matches: 96, runs: 3156, average: 42.1, strikeRate: 142.5 }}
                        />
                        <PlayerCard
                          id="quinton-de-kock"
                          name="Quinton de Kock"
                          image="/images/players/quinton-de-kock.jpg"
                          country="South Africa"
                          role="Batsman"
                          ranking={8}
                          stats={{ matches: 86, runs: 2756, average: 41.8, strikeRate: 138.9 }}
                        />
                      </>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="bowlers" className="space-y-4">
                  <h2 className="text-xl font-bold mb-4">Top Bowlers</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <PlayerCard
                      id="jasprit-bumrah"
                      name="Jasprit Bumrah"
                      image="/images/players/jasprit-bumrah.jpg"
                      country="India"
                      role="Bowler"
                      ranking={1}
                      stats={{ matches: 67, wickets: 115, economy: 6.58, average: 19.3 }}
                    />
                    <PlayerCard
                      id="kagiso-rabada"
                      name="Kagiso Rabada"
                      image="/images/players/kagiso-rabada.jpg"
                      country="South Africa"
                      role="Bowler"
                      ranking={2}
                      stats={{ matches: 52, wickets: 96, economy: 7.12, average: 20.8 }}
                    />
                    <PlayerCard
                      id="pat-cummins"
                      name="Pat Cummins"
                      image="/images/players/pat-cummins.jpg"
                      country="Australia"
                      role="Bowler"
                      ranking={3}
                      stats={{ matches: 48, wickets: 89, economy: 6.94, average: 21.5 }}
                    />
                    <PlayerCard
                      id="trent-boult"
                      name="Trent Boult"
                      image="/images/players/trent-boult.jpg"
                      country="New Zealand"
                      role="Bowler"
                      ranking={4}
                      stats={{ matches: 55, wickets: 98, economy: 7.03, average: 22.1 }}
                    />
                    <PlayerCard
                      id="mitchell-starc"
                      name="Mitchell Starc"
                      image="/images/players/mitchell-starc.jpg"
                      country="Australia"
                      role="Bowler"
                      ranking={5}
                      stats={{ matches: 58, wickets: 104, economy: 7.52, average: 22.8 }}
                    />
                    <PlayerCard
                      id="rashid-khan"
                      name="Rashid Khan"
                      image="/images/players/rashid-khan.jpg"
                      country="Afghanistan"
                      role="Bowler"
                      ranking={6}
                      stats={{ matches: 72, wickets: 124, economy: 6.25, average: 18.7 }}
                    />
                    <PlayerCard
                      id="josh-hazlewood"
                      name="Josh Hazlewood"
                      image="/images/players/josh-hazlewood.jpg"
                      country="Australia"
                      role="Bowler"
                      ranking={7}
                      stats={{ matches: 45, wickets: 82, economy: 7.08, average: 23.4 }}
                    />
                    <PlayerCard
                      id="mohammad-shami"
                      name="Mohammad Shami"
                      image="/images/players/mohammad-shami.jpg"
                      country="India"
                      role="Bowler"
                      ranking={8}
                      stats={{ matches: 60, wickets: 105, economy: 7.45, average: 23.1 }}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="all-rounders" className="space-y-4">
                  <h2 className="text-xl font-bold mb-4">Top All-Rounders</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <PlayerCard
                      id="ben-stokes"
                      name="Ben Stokes"
                      image="/images/players/ben-stokes.jpg"
                      country="England"
                      role="All-Rounder"
                      ranking={1}
                      stats={{ matches: 78, runs: 2123, wickets: 56, battingAvg: 33.7, bowlingAvg: 31.2 }}
                    />
                    <PlayerCard
                      id="shakib-al-hasan"
                      name="Shakib Al Hasan"
                      image="/images/players/shakib-al-hasan.jpg"
                      country="Bangladesh"
                      role="All-Rounder"
                      ranking={2}
                      stats={{ matches: 92, runs: 2348, wickets: 122, battingAvg: 31.3, bowlingAvg: 28.5 }}
                    />
                    <PlayerCard
                      id="ravindra-jadeja"
                      name="Ravindra Jadeja"
                      image="/images/players/ravindra-jadeja.jpg"
                      country="India"
                      role="All-Rounder"
                      ranking={3}
                      stats={{ matches: 64, runs: 1248, wickets: 48, battingAvg: 32.8, bowlingAvg: 33.7 }}
                    />
                    <PlayerCard
                      id="hardik-pandya"
                      name="Hardik Pandya"
                      image="/images/players/hardik-pandya.jpg"
                      country="India"
                      role="All-Rounder"
                      ranking={4}
                      stats={{ matches: 74, runs: 1476, wickets: 54, battingAvg: 29.5, bowlingAvg: 34.2 }}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="wicket-keepers" className="space-y-4">
                  <h2 className="text-xl font-bold mb-4">Top Wicket-Keepers</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <PlayerCard
                      id="jos-buttler"
                      name="Jos Buttler"
                      image="/images/players/jos-buttler.jpg"
                      country="England"
                      role="Wicket-Keeper"
                      ranking={1}
                      stats={{ matches: 88, runs: 2569, dismissals: 124, average: 38.9, strikeRate: 144.2 }}
                    />
                    <PlayerCard
                      id="rishabh-pant"
                      name="Rishabh Pant"
                      image="/images/players/rishabh-pant.jpg"
                      country="India"
                      role="Wicket-Keeper"
                      ranking={2}
                      stats={{ matches: 66, runs: 1920, dismissals: 98, average: 36.2, strikeRate: 142.7 }}
                    />
                    <PlayerCard
                      id="mohammad-rizwan"
                      name="Mohammad Rizwan"
                      image="/images/players/mohammad-rizwan.jpg"
                      country="Pakistan"
                      role="Wicket-Keeper"
                      ranking={3}
                      stats={{ matches: 72, runs: 2156, dismissals: 108, average: 39.2, strikeRate: 132.5 }}
                    />
                    <PlayerCard
                      id="alex-carey"
                      name="Alex Carey"
                      image="/images/players/alex-carey.jpg"
                      country="Australia"
                      role="Wicket-Keeper"
                      ranking={4}
                      stats={{ matches: 58, runs: 1456, dismissals: 87, average: 32.4, strikeRate: 128.9 }}
                    />
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

