interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      case "Interview Scheduled":
        return "bg-purple-100 text-purple-800"
      case "Documents Required":
        return "bg-orange-100 text-orange-800"
        case "Active":
        return "bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles()}`}>
      {status}
    </span>
  )
}
