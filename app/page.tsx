"use client"

import { useState } from "react"
import { students as initialStudents } from "@/data/data"
import { FilterBar } from "@/components/filter-bar"
import { StudentList } from "@/components/student-list"
import { DashboardHeader } from "@/components/dashboard-header"
import { match } from "assert"

export default function Dashboard() {
  const [students, setStudents] = useState(initialStudents)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  // Function to update student status
  const updateStudentStatus = (id: string, newStatus: string) => {
    setStudents(students.map((student) => (student.id === id ? { ...student, status: newStatus } : student)))
  }

  // Filter students based on search query and status filter
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.program.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "All" || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setStatusFilter("All")
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8">
        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          resetFilters={resetFilters}
        />
        <StudentList students={filteredStudents} updateStudentStatus={updateStudentStatus} />
      </div>
    </main>
  )
}
