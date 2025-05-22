import { students } from "@/data/data"
import { GraduationCap } from "lucide-react"
import { StatusBadge } from "./status-badge"

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Study Abroad CRM</h1>
            <p className="text-sm text-gray-500">Student Application Dashboard</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 text-sm text-gray-500">
            <span className="font-medium text-gray-900">{students.length}</span> Applications
          </div>
                 <StatusBadge status="Active"/>
        </div>
      </div>
    </header>
  )
}
