import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CalendarDays, Clock, MapPin, Trophy, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async   function MatchDetailsPage({ params }: { params: { slug: string } }) {
  // In a real app, we would fetch match data based on the slug
  console.log(params.slug);
  console.log("===================");
  const matchData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/cricket/match-details?id=${params.slug}`,
    {
      next: { revalidate: 60 }, // Revalidate every minute
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error fetching live scores:", err)
      return {}
    })
   var match_status = 'Live'
    if (matchData.matchEnded){
      match_status = 'Completed'
    }
    matchData.match_status = match_status
    matchData.toss = `${matchData.tossWinner} won the toss and elected to ${matchData.tossChoice}`
    matchData.team1 =  matchData.teams[0], // "Namibia"
    matchData.team2 =  matchData.teams[1], //
    matchData.team1Flag =  `/images/teams/${matchData.team1}.png?height=60&width=90`
    matchData.team2Flag =  `/images/teams/${matchData.team2}.png?height=60&width=90`
    matchData.team1Score = `${matchData.score[1].r}/${matchData.score[1].w}` // "146/7"
    matchData.team2Score =  `${matchData.score[0].r}/${matchData.score[0].w}` // "145/8"
    var maxOvers = Math.max(matchData.score[0].o, matchData.score[1].o)
    matchData.date =  new Date(matchData.date).toDateString()
    console.log(`/public/images/teams/${matchData.team1 }.png?`);


  // const matchData = {
  //   matchType: "T20",
  //   team1: "India",
  //   team2: "Australia",
  //   team1Score: "186/4",
  //   team2Score: "120/7",
  //   overs: "15.2/20",
  //   status: "India needs 67 runs in 28 balls",
  //   team1Flag: "/placeholder.svg?height=60&width=90",
  //   team2Flag: "/placeholder.svg?height=60&width=90",
  //   venue: "Melbourne Cricket Ground, Australia",
  //   date: "Mar 18, 2023",
  //   time: "19:00 IST",
  //   toss: "India won the toss and elected to bat",
  //   umpires: "Kumar Dharmasena, Richard Kettleborough",
  //   referee: "Ranjan Madugalle",
  // }

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
            <Link href="/players" className="text-sm font-medium text-slate-700 hover:text-slate-900">
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
            <Link href="/live-scores" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Live Scores
            </Link>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Match Details</h1>
                <p className="text-slate-600 mt-1">
                 {matchData.name}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <CalendarDays className="h-4 w-4 text-blue-600" />
                  <span>{matchData.date}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>{matchData.time}</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-6 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    <h2 className="text-xl font-bold">{matchData.name} Match</h2>
                  </div>
                  <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">{matchData.match_status}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center mb-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={matchData.team1Flag || "/placeholder.svg"}
                        width={90}
                        height={60}
                        alt={`${matchData.team1} flag`}
                        className="rounded"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{matchData.team1}</h3>
                    <p className="text-2xl font-semibold text-emerald-600">{matchData.team1Score}</p>
                  </div>
                  <div className="text-center text-slate-500 text-lg font-medium">VS</div>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={matchData.team2Flag || "/placeholder.svg"}
                        width={90}
                        height={60}
                        alt={`${matchData.team2} flag`}
                        className="rounded"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{matchData.team2}</h3>
                    <p className="text-2xl font-semibold text-emerald-600">{matchData.team2Score}</p>
                  </div>
                </div>
                <div className="text-center mb-6">
                  <p className="text-lg text-slate-500">{matchData.overs}</p>
                  <p className="text-lg font-medium text-slate-700">{matchData.status}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-600">Venue:</span>
                    <span className="font-medium">{matchData.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-600">Toss:</span>
                    <span className="font-medium">{matchData.toss}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-600">Umpires:</span>
                    <span className="font-medium">{matchData.umpires}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-600">Match Referee:</span>
                    <span className="font-medium">{matchData.referee}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="scorecard" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger
                value="scorecard"
                className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
              >
                Scorecard
              </TabsTrigger>
              <TabsTrigger
                value="commentary"
                className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
              >
                Commentary
              </TabsTrigger>
              <TabsTrigger
                value="stats"
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
              >
                Match Stats
              </TabsTrigger>
              <TabsTrigger
                value="teams"
                className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
              >
                Teams
              </TabsTrigger>
            </TabsList>
            <TabsContent value="scorecard">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">{matchData.team1} Innings</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 pr-4">Batter</th>
                          <th className="text-center py-2 px-4">Runs</th>
                          <th className="text-center py-2 px-4">Balls</th>
                          <th className="text-center py-2 px-4">4s</th>
                          <th className="text-center py-2 px-4">6s</th>
                          <th className="text-center py-2 px-4">SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 pr-4">
                            <div>
                              <p className="font-medium">Rohit Sharma</p>
                              <p className="text-xs text-slate-500">c Maxwell b Starc</p>
                            </div>
                          </td>
                          <td className="text-center py-2 px-4">45</td>
                          <td className="text-center py-2 px-4">32</td>
                          <td className="text-center py-2 px-4">4</td>
                          <td className="text-center py-2 px-4">2</td>
                          <td className="text-center py-2 px-4">140.63</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4">
                            <div>
                              <p className="font-medium">KL Rahul</p>
                              <p className="text-xs text-slate-500">b Cummins</p>
                            </div>
                          </td>
                          <td className="text-center py-2 px-4">30</td>
                          <td className="text-center py-2 px-4">25</td>
                          <td className="text-center py-2 px-4">3</td>
                          <td className="text-center py-2 px-4">1</td>
                          <td className="text-center py-2 px-4">120.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4">
                            <div>
                              <p className="font-medium">Virat Kohli</p>
                              <p className="text-xs text-slate-500">not out</p>
                            </div>
                          </td>
                          <td className="text-center py-2 px-4">82</td>
                          <td className="text-center py-2 px-4">53</td>
                          <td className="text-center py-2 px-4">6</td>
                          <td className="text-center py-2 px-4">4</td>
                          <td className="text-center py-2 px-4">154.72</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4">
                            <div>
                              <p className="font-medium">Suryakumar Yadav</p>
                              <p className="text-xs text-slate-500">c Finch b Hazlewood</p>
                            </div>
                          </td>
                          <td className="text-center py-2 px-4">25</td>
                          <td className="text-center py-2 px-4">14</td>
                          <td className="text-center py-2 px-4">2</td>
                          <td className="text-center py-2 px-4">2</td>
                          <td className="text-center py-2 px-4">178.57</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-bold mt-8 mb-4">Bowling</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 pr-4">Bowler</th>
                          <th className="text-center py-2 px-4">O</th>
                          <th className="text-center py-2 px-4">M</th>
                          <th className="text-center py-2 px-4">R</th>
                          <th className="text-center py-2 px-4">W</th>
                          <th className="text-center py-2 px-4">Econ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Mitchell Starc</td>
                          <td className="text-center py-2 px-4">4</td>
                          <td className="text-center py-2 px-4">0</td>
                          <td className="text-center py-2 px-4">42</td>
                          <td className="text-center py-2 px-4">1</td>
                          <td className="text-center py-2 px-4">10.50</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Josh Hazlewood</td>
                          <td className="text-center py-2 px-4">4</td>
                          <td className="text-center py-2 px-4">0</td>
                          <td className="text-center py-2 px-4">38</td>
                          <td className="text-center py-2 px-4">1</td>
                          <td className="text-center py-2 px-4">9.50</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Pat Cummins</td>
                          <td className="text-center py-2 px-4">4</td>
                          <td className="text-center py-2 px-4">0</td>
                          <td className="text-center py-2 px-4">36</td>
                          <td className="text-center py-2 px-4">1</td>
                          <td className="text-center py-2 px-4">9.00</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Adam Zampa</td>
                          <td className="text-center py-2 px-4">4</td>
                          <td className="text-center py-2 px-4">0</td>
                          <td className="text-center py-2 px-4">32</td>
                          <td className="text-center py-2 px-4">0</td>
                          <td className="text-center py-2 px-4">8.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="commentary">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="border-l-4 border-emerald-500 pl-4 py-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-bold text-emerald-700">15.2 Overs</div>
                        <div className="text-sm text-slate-500">Current Score: 120/7</div>
                      </div>
                      <p className="text-slate-700">
                        Bumrah to Maxwell, OUT! Caught at long-on! Maxwell tries to go big but doesn't get enough power
                        behind it. Kohli takes a comfortable catch at the boundary.
                      </p>
                    </div>
                    <div className="border-l-4 border-slate-300 pl-4 py-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-bold">15.1 Overs</div>
                        <div className="text-sm text-slate-500">Score: 120/6</div>
                      </div>
                      <p className="text-slate-700">
                        Bumrah to Maxwell, FOUR! Short and wide, Maxwell cuts it past point for a boundary.
                      </p>
                    </div>
                    <div className="border-l-4 border-slate-300 pl-4 py-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-bold">15.0 Overs</div>
                        <div className="text-sm text-slate-500">Score: 116/6</div>
                      </div>
                      <p className="text-slate-700">
                        Bumrah to Cummins, No run. Good length delivery, defended back to the bowler.
                      </p>
                    </div>
                    <div className="border-l-4 border-slate-300 pl-4 py-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-bold">14.6 Overs</div>
                        <div className="text-sm text-slate-500">Score: 116/6</div>
                      </div>
                      <p className="text-slate-700">
                        Shami to Maxwell, SIX! What a shot! Maxwell goes down on one knee and slog sweeps it over deep
                        midwicket for a maximum.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stats">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold mb-4">Batting Stats</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-slate-600 mb-1">Top Scorer</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                                V
                              </div>
                              <span className="font-medium">Virat Kohli</span>
                            </div>
                            <div className="font-bold text-emerald-600">82 (53)</div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 mb-1">Highest Strike Rate (min 20 runs)</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                S
                              </div>
                              <span className="font-medium">Suryakumar Yadav</span>
                            </div>
                            <div className="font-bold text-blue-600">178.57</div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 mb-1">Most Boundaries</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                                V
                              </div>
                              <span className="font-medium">Virat Kohli</span>
                            </div>
                            <div className="font-bold text-emerald-600">10 (6x4, 4x6)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-4">Bowling Stats</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-slate-600 mb-1">Best Bowler</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                                B
                              </div>
                              <span className="font-medium">Jasprit Bumrah</span>
                            </div>
                            <div className="font-bold text-purple-600">3/24</div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 mb-1">Best Economy (min 2 overs)</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                                A
                              </div>
                              <span className="font-medium">Ravindra Jadeja</span>
                            </div>
                            <div className="font-bold text-amber-600">6.25</div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 mb-1">Most Dot Balls</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                                B
                              </div>
                              <span className="font-medium">Jasprit Bumrah</span>
                            </div>
                            <div className="font-bold text-purple-600">12</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="teams">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Image
                          src={matchData.team1Flag || "/placeholder.svg"}
                          width={24}
                          height={16}
                          alt={`${matchData.team1} flag`}
                          className="rounded"
                        />
                        {matchData.team1} Playing XI
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            1
                          </div>
                          <span>Rohit Sharma (c)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            2
                          </div>
                          <span>KL Rahul</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            3
                          </div>
                          <span>Virat Kohli</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            4
                          </div>
                          <span>Suryakumar Yadav</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            5
                          </div>
                          <span>Rishabh Pant (wk)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            6
                          </div>
                          <span>Hardik Pandya</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            7
                          </div>
                          <span>Ravindra Jadeja</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            8
                          </div>
                          <span>Bhuvneshwar Kumar</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            9
                          </div>
                          <span>Mohammed Shami</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            10
                          </div>
                          <span>Jasprit Bumrah</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                            11
                          </div>
                          <span>Yuzvendra Chahal</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Image
                          src={matchData.team2Flag || "/placeholder.svg"}
                          width={24}
                          height={16}
                          alt={`${matchData.team2} flag`}
                          className="rounded"
                        />
                        {matchData.team2} Playing XI
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            1
                          </div>
                          <span>Aaron Finch (c)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            2
                          </div>
                          <span>David Warner</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            3
                          </div>
                          <span>Steve Smith</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            4
                          </div>
                          <span>Glenn Maxwell</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            5
                          </div>
                          <span>Marcus Stoinis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            6
                          </div>
                          <span>Alex Carey (wk)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            7
                          </div>
                          <span>Pat Cummins</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            8
                          </div>
                          <span>Mitchell Starc</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            9
                          </div>
                          <span>Josh Hazlewood</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            10
                          </div>
                          <span>Adam Zampa</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            11
                          </div>
                          <span>Nathan Lyon</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

