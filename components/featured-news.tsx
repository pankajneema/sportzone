import { CalendarDays } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FeaturedNewsProps {
  title: string
  excerpt: string
  image: string
  date: string
}

export default function FeaturedNews({ title, excerpt, image, date }: FeaturedNewsProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          width={120}
          height={80}
          alt={title}
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex-1">
        <Link href="#" className="font-medium hover:text-blue-600 transition-colors">
          {title}
        </Link>
        <p className="text-sm text-slate-600 line-clamp-2 mt-1">{excerpt}</p>
        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
          <CalendarDays className="h-3 w-3" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  )
}

