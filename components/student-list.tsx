import { StudentCard } from "@/components/student-card"
import type { Student } from "@/types/student"

interface StudentListProps {
  students: Student[]
  updateStudentStatus: (id: string, newStatus: string) => void
}

export function StudentList({ students, updateStudentStatus }: StudentListProps) {
  if (students.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Search className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No applications found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} updateStatus={updateStudentStatus} />
      ))}
    </div>
  )
}

import { Search } from "lucide-react"
