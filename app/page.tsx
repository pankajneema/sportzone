import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, MapPin, TrendingUp, Trophy, Users } from "lucide-react"
// import LiveScoreCard from "@/components/live-score-card"
import UpcomingMatchCard from "@/components/upcoming-match-card"
import SportSelector from "@/components/sport-selector"
import FeaturedNews from "@/components/featured-news"
import TournamentStandings from "@/components/tournament-standings"

export default async  function Home() {

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
            <Link href="/" className="text-sm font-medium text-emerald-700 hover:text-emerald-900">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Cricket Live Scores & Updates</h1>
              <p className="text-slate-600 mt-1">Real-time scores, stats, and updates from around the world</p>
            </div>
            <SportSelector />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="live" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger
                    value="live"
                    className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
                  >
                    Live Matches
                  </TabsTrigger>
                  <TabsTrigger
                    value="upcoming"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger
                    value="recent"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    Recent
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="live" className="space-y-4">
                </TabsContent>
                <TabsContent value="upcoming" className="space-y-4">
                  <UpcomingMatchCard
                    matchType="T20"
                    team1="West Indies"
                    team2="Sri Lanka"
                    date="Tomorrow"
                    time="19:00"
                    venue="Bridgetown, Barbados"
                    team1Flag="/placeholder.svg?height=30&width=45"
                    team2Flag="/placeholder.svg?height=30&width=45"
                  />
                  <UpcomingMatchCard
                    matchType="ODI"
                    team1="Bangladesh"
                    team2="Afghanistan"
                    date="23 Mar"
                    time="14:30"
                    venue="Dhaka, Bangladesh"
                    team1Flag="/placeholder.svg?height=30&width=45"
                    team2Flag="/placeholder.svg?height=30&width=45"
                  />
                  <UpcomingMatchCard
                    matchType="Test"
                    team1="India"
                    team2="England"
                    date="25 Mar"
                    time="10:00"
                    venue="Mumbai, India"
                    team1Flag="/placeholder.svg?height=30&width=45"
                    team2Flag="/placeholder.svg?height=30&width=45"
                  />
                </TabsContent>
              </Tabs>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-4 text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Featured News & Updates
                    </h2>
                  </div>
                  <div className="p-4 space-y-4">
                    <FeaturedNews
                      title="Virat Kohli scores his 71st century in international cricket"
                      excerpt="The Indian batsman reached another milestone in his illustrious career during the match against Australia."
                      image="/placeholder.svg?height=80&width=120"
                      date="2 hours ago"
                    />
                    <FeaturedNews
                      title="England announces squad for upcoming T20 World Cup"
                      excerpt="The ECB has revealed the 15-member squad that will represent England in the upcoming ICC T20 World Cup."
                      image="/placeholder.svg?height=80&width=120"
                      date="5 hours ago"
                    />
                    <FeaturedNews
                      title="IPL 2023: Chennai Super Kings win thriller against Mumbai Indians"
                      excerpt="MS Dhoni's last-ball six secured a dramatic victory for CSK in the IPL's El Clasico."
                      image="/placeholder.svg?height=80&width=120"
                      date="Yesterday"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      IPL 2023 Standings
                    </h2>
                  </div>
                  <div className="p-4">
                    <TournamentStandings
                      tournament="IPL 2023"
                      teams={[
                        { name: "Gujarat Titans", played: 14, won: 10, lost: 4, points: 20, nrr: "+0.809" },
                        { name: "Chennai Super Kings", played: 14, won: 8, lost: 6, points: 16, nrr: "+0.652" },
                        { name: "Mumbai Indians", played: 14, won: 8, lost: 6, points: 16, nrr: "+0.445" },
                        { name: "Rajasthan Royals", played: 14, won: 7, lost: 7, points: 14, nrr: "+0.333" },
                        { name: "Royal Challengers", played: 14, won: 7, lost: 7, points: 14, nrr: "+0.172" },
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <CalendarDays className="h-5 w-5" />
                      Upcoming Tournaments
                    </h2>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-md text-amber-800">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">ICC T20 World Cup 2023</h3>
                        <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <Clock className="h-4 w-4" />
                          <span>Jun 4 - Jun 30, 2023</span>
                        </div>
                        <div className="text-sm text-slate-500 flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>West Indies & USA</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-md text-blue-800">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Asia Cup 2023</h3>
                        <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <Clock className="h-4 w-4" />
                          <span>Aug 15 - Sep 1, 2023</span>
                        </div>
                        <div className="text-sm text-slate-500 flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Pakistan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Top Players
                    </h2>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                          <img src="/placeholder.svg?height=40&width=40" alt="Virat Kohli" className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Virat Kohli</p>
                          <p className="text-xs text-slate-500">India</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-emerald-600">912</p>
                        <p className="text-xs text-slate-500">ICC Ranking</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Kane Williamson"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Kane Williamson</p>
                          <p className="text-xs text-slate-500">New Zealand</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-emerald-600">890</p>
                        <p className="text-xs text-slate-500">ICC Ranking</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                          <img src="/placeholder.svg?height=40&width=40" alt="Steve Smith" className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Steve Smith</p>
                          <p className="text-xs text-slate-500">Australia</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-emerald-600">881</p>
                        <p className="text-xs text-slate-500">ICC Ranking</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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

