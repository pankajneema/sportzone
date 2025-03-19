export interface Player {
  id: string
  name: string
  image: string
  country: string
  role: string
  ranking?: number
  dateOfBirth?: string
  battingStyle?: string
  bowlingStyle?: string
  teams?: string[]
  stats?: {
    test?: any
    odi?: any
    t20i?: any
    ipl?: any
  }
  bio?: string
  createdAt: Date
  updatedAt: Date
}

