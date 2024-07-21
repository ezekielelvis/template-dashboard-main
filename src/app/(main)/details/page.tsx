import { data } from "@/data/data"
import { FaArrowRight } from "react-icons/fa" // Import Font Awesome icon

interface Person {
  name: string
  email: string
  role: string
  workspaceStatus: "online" | "busy" | "away" | "offline"
}

const people: Person[] = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    workspaceStatus: "online",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    workspaceStatus: "busy",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    workspaceStatus: "away",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    workspaceStatus: "offline",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    workspaceStatus: "online",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    workspaceStatus: "busy",
  },
]

const getInitials = (name: string) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
  return initials.slice(0, 2)
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-emerald-500"
    case "busy":
      return "bg-red-500"
    case "away":
      return "bg-yellow-500"
    case "offline":
      return "bg-gray-500"
    default:
      return "bg-gray-500"
  }
}

const PeopleList = async() => {
  const overivewId = await data.id

  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Workspace
      </h1>
      <p className="pb-5 text-sm text-gray-900 sm:text-sm dark:text-gray-400">
        View all yor workspaces here
      </p>
      <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-700">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-blue-500 text-lg font-semibold text-white">
                {getInitials(person.name)}
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 dark:text-gray-100">
                  {person.role}
                </p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div
                    className={`flex-none rounded-full p-1 ${getStatusColor(person.workspaceStatus)}/20`}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${getStatusColor(person.workspaceStatus)}`}
                    />
                  </div>
                  <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {person.workspaceStatus.charAt(0).toUpperCase() +
                      person.workspaceStatus.slice(1)}
                  </p>
                </div>
              </div>
              <div className="m-5 flex items-center">
                <a href={`/details/${overivewId}/overview`} className="text-blue-500 hover:text-blue-700">
                  <FaArrowRight />
                </a>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </>

  )
}

export default PeopleList
