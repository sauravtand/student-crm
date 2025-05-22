import { Calendar, GraduationCap } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { StatusBadge } from "@/components/status-badge"
import { StatusUpdateDropdown } from "@/components/status-update-dropdown"
import type { Student } from "@/types/student"

interface StudentCardProps {
  student: Student
  updateStatus: (id: string, newStatus: string) => void
}

export function StudentCard({ student, updateStatus }: StudentCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900 truncate">{student.name}</h3>
          <StatusBadge status={student.status} />
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start gap-2">
          <GraduationCap className="h-4 w-4 text-gray-400 mt-0.5" />
          <span className="text-sm text-gray-700">{student.program}</span>
        </div>

        <div className="flex items-start gap-2">
          <Calendar className="h-4 w-4 text-gray-400 mt-0.5" />
          <span className="text-sm text-gray-700">Applied on {formatDate(student.applicationDate)}</span>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <div className="text-xs text-gray-500">ID: {student.id}</div>
        <StatusUpdateDropdown
          currentStatus={student.status}
          onStatusChange={(newStatus) => updateStatus(student.id, newStatus)}
        />
      </div>
    </div>
  )
}
