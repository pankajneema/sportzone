import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Trophy } from "lucide-react"
import Link from "next/link"
import UpcomingMatchCard from "@/components/upcoming-match-card"
import SportSelector from "@/components/sport-selector"

export default async function SchedulePage() {
  // In a real app, we would fetch this data from the API
  const upcomingMatches = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cricket/upcoming-matches`,
    { next: { revalidate: 300 } },
  )
    .then((res) => res.json())
    .then((data) => data.upcomingMatches)
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
            <Link href="/schedule" className="text-sm font-medium text-emerald-700 hover:text-emerald-900">
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
              <h1 className="text-3xl font-bold tracking-tight">Match Schedule</h1>
              <p className="text-slate-600 mt-1">Upcoming cricket matches from around the world</p>
            </div>
            <SportSelector />
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger
                    value="upcoming"
                    className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger
                    value="international"
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
                  >
                    International
                  </TabsTrigger>
                  <TabsTrigger
                    value="t20leagues"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800"
                  >
                    T20 Leagues
                  </TabsTrigger>
                  <TabsTrigger
                    value="domestic"
                    className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
                  >
                    Domestic
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming" className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="h-5 w-5 text-emerald-600" />
                    <h2 className="text-xl font-bold">This Week</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingMatches && upcomingMatches.length > 0 ? (
                      upcomingMatches.map((match: any) => (
                        <UpcomingMatchCard
                          key={match.id}
                          matchType={match.matchType}
                          team1={match.team1}
                          team2={match.team2}
                          date={match.date}
                          time={match.time}
                          venue={match.venue}
                          team1Flag={match.team1Flag}
                          team2Flag={match.team2Flag}
                        />
                      ))
                    ) : (
                      <>
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
                        <UpcomingMatchCard
                          matchType="T20"
                          team1="Australia"
                          team2="New Zealand"
                          date="27 Mar"
                          time="13:30"
                          venue="Sydney, Australia"
                          team1Flag="/placeholder.svg?height=30&width=45"
                          team2Flag="/placeholder.svg?height=30&width=45"
                        />
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-8 mb-4">
                    <CalendarDays className="h-5 w-5 text-emerald-600" />
                    <h2 className="text-xl font-bold">Next Week</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <UpcomingMatchCard
                      matchType="ODI"
                      team1="Pakistan"
                      team2="South Africa"
                      date="30 Mar"
                      time="14:00"
                      venue="Lahore, Pakistan"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="T20"
                      team1="England"
                      team2="West Indies"
                      date="01 Apr"
                      time="20:00"
                      venue="London, England"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="Test"
                      team1="Australia"
                      team2="India"
                      date="02 Apr"
                      time="10:00"
                      venue="Perth, Australia"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="ODI"
                      team1="New Zealand"
                      team2="Sri Lanka"
                      date="05 Apr"
                      time="11:00"
                      venue="Wellington, New Zealand"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="international" className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-bold">Upcoming International Matches</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <UpcomingMatchCard
                      matchType="ODI"
                      team1="England"
                      team2="South Africa"
                      date="23 Mar"
                      time="14:30"
                      venue="London, England"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="Test"
                      team1="New Zealand"
                      team2="Pakistan"
                      date="25 Mar"
                      time="10:00"
                      venue="Auckland, New Zealand"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="T20"
                      team1="India"
                      team2="Australia"
                      date="27 Mar"
                      time="19:00"
                      venue="Mumbai, India"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="ODI"
                      team1="West Indies"
                      team2="Bangladesh"
                      date="30 Mar"
                      time="14:00"
                      venue="Kingston, Jamaica"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="t20leagues" className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="h-5 w-5 text-purple-600" />
                    <h2 className="text-xl font-bold">Upcoming T20 League Matches</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <UpcomingMatchCard
                      matchType="T20"
                      team1="Mumbai Indians"
                      team2="Chennai Super Kings"
                      date="22 Mar"
                      time="19:30"
                      venue="Mumbai, India"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="T20"
                      team1="Royal Challengers"
                      team2="Kolkata Knight Riders"
                      date="23 Mar"
                      time="19:30"
                      venue="Bengaluru, India"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="T20"
                      team1="Rajasthan Royals"
                      team2="Delhi Capitals"
                      date="24 Mar"
                      time="15:30"
                      venue="Jaipur, India"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="T20"
                      team1="Punjab Kings"
                      team2="Sunrisers Hyderabad"
                      date="24 Mar"
                      time="19:30"
                      venue="Mohali, India"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="domestic" className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="h-5 w-5 text-amber-600" />
                    <h2 className="text-xl font-bold">Upcoming Domestic Matches</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <UpcomingMatchCard
                      matchType="First-Class"
                      team1="Yorkshire"
                      team2="Lancashire"
                      date="25 Mar"
                      time="10:00"
                      venue="Leeds, England"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="First-Class"
                      team1="Mumbai"
                      team2="Delhi"
                      date="26 Mar"
                      time="09:30"
                      venue="Mumbai, India"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="List A"
                      team1="Victoria"
                      team2="New South Wales"
                      date="28 Mar"
                      time="10:00"
                      venue="Melbourne, Australia"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
                    />
                    <UpcomingMatchCard
                      matchType="List A"
                      team1="Titans"
                      team2="Lions"
                      date="30 Mar"
                      time="13:00"
                      venue="Centurion, South Africa"
                      team1Flag="/placeholder.svg?height=30&width=45"
                      team2Flag="/placeholder.svg?height=30&width=45"
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

