"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function SportSelector() {
  const [selectedSport, setSelectedSport] = useState("Cricket")

  const sports = ["Cricket", "Football", "Tennis", "Basketball", "Hockey"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[180px] justify-between">
          {selectedSport}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {sports.map((sport) => (
          <DropdownMenuItem
            key={sport}
            onClick={() => setSelectedSport(sport)}
            className="flex items-center justify-between"
          >
            {sport}
            {selectedSport === sport && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

