"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronDown } from "lucide-react"

interface StatusUpdateDropdownProps {
  currentStatus: string
  onStatusChange: (status: string) => void
}

export function StatusUpdateDropdown({ currentStatus, onStatusChange }: StatusUpdateDropdownProps) {
  const statuses = ["Pending", "Approved", "Rejected", "Interview Scheduled", "Documents Required"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 text-xs">
          Change Status
          <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {statuses.map((status) => (
          <DropdownMenuItem
            key={status}
            onClick={() => onStatusChange(status)}
            className="flex items-center gap-2"
            disabled={status === currentStatus}
          >
            {status === currentStatus && <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />}
            <span className={status === currentStatus ? "font-medium" : ""}>{status}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
