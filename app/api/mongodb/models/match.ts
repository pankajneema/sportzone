export interface Match {
  id: string
  matchType: string
  team1: string
  team2: string
  team1Score?: string
  team2Score?: string
  overs?: string
  status: string
  team1Flag: string
  team2Flag: string
  venue: string
  date: string
  time: string
  series?: string
  isLive?: boolean
  isCompleted?: boolean
  toss?: string
  umpires?: string
  referee?: string
  createdAt: Date
  updatedAt: Date
}

