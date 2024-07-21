"use client"
import { data } from "@/data/data"
import dynamic from "next/dynamic"
import { Suspense, useState } from "react"

const DashboardChartComposition = dynamic(
  () =>
    import("@/components/ui/overview/DashboardChartComposition").then(
      (mod) => mod.DashboardChartComposition,
    ),
  { ssr: false, loading: () => <div>Loading Chart Composition...</div> },
)

const DashboardDounutChart = dynamic(
  () =>
    import("@/components/ui/overview/DashboardDounutChart").then(
      (mod) => mod.DashboardDounutChart,
    ),
  { ssr: false, loading: () => <div>Loading Donut Chart...</div> },
)

const Kpicard = dynamic(
  () => import("@/components/ui/overview/Kpicard").then((mod) => mod.Kpicard),
  { ssr: false, loading: () => <div>Loading KPI Card...</div> },
)

const DashboardCategoryBarCard = dynamic(
  () =>
    import("@/components/ui/overview/DashboardCategoryBarCard").then(
      (mod) => mod.DashboardCategoryBarCard,
    ),
  { ssr: false, loading: () => <div>Loading Category Bar Card...</div> },
)

const DashboardFilterbar = dynamic(
  () =>
    import("@/components/ui/overview/DashboardFilterbar").then(
      (mod) => mod.DashboardFilterbar,
    ),
  { ssr: false, loading: () => <div>Loading Filter Bar...</div> },
)

const DashboardProgressBarCard = dynamic(
  () =>
    import("@/components/ui/overview/DashboardProgressBarCard").then(
      (mod) => mod.DashboardProgressBarCard,
    ),
  { ssr: false, loading: () => <div>Loading Progress Bar Card...</div> },
)

const Radarchart = dynamic(
  () =>
    import("@/components/ui/overview/Radarchart").then((mod) => mod.Radarchart),
  { ssr: false, loading: () => <div>Loading Progress Bar Card...</div> },
)

const Radialchart = dynamic(
  () =>
    import("@/components/ui/overview/Radialchart").then(
      (mod) => mod.Radialchart,
    ),
  { ssr: false, loading: () => <div>Loading Progress Bar Card...</div> },
)

const Linechart = dynamic(
  () =>
    import("@/components/ui/overview/Linechart").then((mod) => mod.Linechart),
  { ssr: false, loading: () => <div>Loading Progress Bar Card...</div> },
)

const Page = () => {
  const [test, setTest] = useState(false)

  const handleTest = () => {
    setTest((prev) => !prev)
  }
  return (
    <div className="my-5">
        <div className={`${test === true ? "hidden" : "block"} flex h-[60vh] w-full items-center justify-center px-5`}>
        <div className="no-test border px-40 py-20 border-dashed rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl my-4">No Test Yet</h2>
          <button
            className={`mb-5 rounded-md bg-blue-700 p-2 text-white hover:bg-blue-500 dark:text-white`}
            onClick={handleTest}
          >
            Test Repository
          </button>
        </div>
      </div>
      <div className={`container ${test === true ? "block" : "hidden"}`}>
        <Suspense fallback={<div>Loading page content...</div>}>
          <div className="mb-5">
            <Kpicard />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Linechart />
            {/* <DashboardDounutChart /> */}
            <DashboardChartComposition />
          </div>

          {/* <div className='my-5'>
          <DashboardCategoryBarCard />
        </div> */}

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <DashboardFilterbar />
            <DashboardProgressBarCard />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-">
          {/* <Linechart /> */}
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default Page
