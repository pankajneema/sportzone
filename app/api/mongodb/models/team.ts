export interface Team {
  id: string
  name: string
  flag: string
  type: string
  ranking?: number
  captain?: string
  coach?: string
  homeGround?: string
  iccTrophies?: number
  players?: string[]
  recentResults?: {
    opponent: string
    result: string
    score: string
  }[]
  upcomingMatches?: {
    opponent: string
    date: string
    venue: string
  }[]
  bio?: string
  createdAt: Date
  updatedAt: Date
}

