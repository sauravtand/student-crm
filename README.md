# 🎓 Study Abroad CRM Dashboard

A responsive admin dashboard built with **Next.js**, **Tailwind CSS**, and **TypeScript** to manage student applications for a Study Abroad CRM system.

---

## 🚀 Overview

This dashboard allows administrators to:

- View and manage student applications
- Filter applications by status or search by name/program
- Update application statuses with a simple dropdown UI
- Get an at-a-glance understanding of student status distribution

---

## 🧱 Component Architecture

The application is organized into modular, reusable components:

### Core Components

1. **Dashboard (app/page.tsx)**
   - The main container component that manages the application state
   - Handles filtering logic and status updates
   - Composes other components to form the complete UI

2. **DashboardHeader**
   - Displays the application title and basic statistics
   - Provides visual context for the user

3. **FilterBar**
   - Contains search input and status filter dropdown
   - Includes quick filter buttons for common statuses
   - Handles reset functionality for all filters

4. **StudentList**
   - Renders the collection of StudentCard components
   - Handles the empty state when no results are found
   - Implements responsive grid layout

5. **StudentCard**
   - Displays individual student information
   - Shows status badge and application details
   - Contains the status update dropdown

6. **StatusBadge**
   - Visual indicator for application status
   - Color-coded for quick identification

7. **StatusUpdateDropdown**
   - Allows changing student application status
   - Shows current status and available options

---

## 🧩 Supporting Files

- **`types/student.ts`**: Defines the `Student` TypeScript type
- **`data/data.ts`**: Contains mock student data
- **`lib/utils.ts`**: Helper functions like date formatting and Tailwind class merging

---

### Development Approach

My approach to developing this application followed these steps:

1. **Initial Planning**:
   - Analyzed the requirements to understand the needed functionality
   - Sketched the component structure and data flow
   - Identified the key features to implement

2. **Project Setup**:
   - Created a Next.js project with App Router
   - Set up Tailwind CSS for styling
   - Added TypeScript for type safety

3. **Data Modeling**:
   - Defined the Student interface
   - Created the mock data structure
   - Set up the initial state

4. **Component Development**:
   - Started with the main Dashboard component
   - Built the UI components from the bottom up (StudentCard first, then StudentList, etc.)
   - Implemented the filter functionality
   - Added the status update feature

5. **Styling and Responsiveness**:
   - Applied Tailwind CSS classes for consistent styling
   - Ensured the layout works on all screen sizes
   - Added visual feedback for interactive elements

6. **Testing and Refinement**:
   - Tested all features manually
   - Refined the UI based on usability considerations
   - Added edge case handling (e.g., empty search results)

   ---

## ⚙️ State Management

React’s `useState` is used for managing the core application state:

```tsx
const [students, setStudents] = useState(initialStudents);
const [searchQuery, setSearchQuery] = useState("");
const [statusFilter, setStatusFilter] = useState("All");

---

| Challenge                   | Solution                                                   |
| --------------------------- | ---------------------------------------------------------- |
| Combining filters           | Wrote composable filter logic using `.filter()`            |
| Making it responsive        | Used Tailwind's `grid-cols` classes and media breakpoints  |
| User-friendly status update | Used `@radix-ui/react-dropdown-menu` with clear indicators |
| Handling empty results      | Displayed a helpful "No results found" message             |
| Maintainability             | Modularized everything into atomic, typed components       |


🌱 Future Improvements
🔐 Add authentication and roles

🌐 Integrate with a backend API

📊 Include analytics & stats

📅 Add advanced filters (date ranges, sorting)

📤 Export data (CSV/PDF)

🗂️ Create detailed student profiles
