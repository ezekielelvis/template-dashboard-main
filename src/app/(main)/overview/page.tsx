"use client"
import { CategoryBarCard } from "@/components/ui/overview/DashboardCategoryBarCard"
import { ChartComposition } from "@/components/ui/overview/DashboardChartComposition"
import { ProgressBarCard } from "@/components/ui/overview/DashboardProgressBarCard"
import { ChartCard } from "@/components/ui/overview/Radarchart"
import { overviews } from "@/data/overview-data"
import { OverviewData } from "@/data/schema"
import { cx } from "@/lib/utils"
import { subDays, toDate } from "date-fns"
import React from "react"
import { DateRange } from "react-day-picker"

export type PeriodValue = "previous-period" | "last-year" | "no-comparison"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const categories: {
  title: keyof OverviewData
  type: "currency" | "unit"
}[] = [
  {
    title: "Rows read",
    type: "unit",
  },
  {
    title: "Rows written",
    type: "unit",
  },
  {
    title: "Queries",
    type: "unit",
  },
  {
    title: "Payments completed",
    type: "currency",
  },
  {
    title: "Sign ups",
    type: "unit",
  },
  {
    title: "Logins",
    type: "unit",
  },
]

export type KpiEntry = {
  title: string
  percentage: number
  current: number
  allowed: number
  unit?: string
}

const data: KpiEntry[] = [
  {
    title: "Rows read",
    percentage: 48.1,
    current: 48.1,
    allowed: 100,
    unit: "M",
  },
  {
    title: "Rows written",
    percentage: 78.3,
    current: 78.3,
    allowed: 100,
    unit: "M",
  },
  {
    title: "Storage",
    percentage: 26,
    current: 5.2,
    allowed: 20,
    unit: "GB",
  },
]

const data2: KpiEntry[] = [
  {
    title: "Weekly active users",
    percentage: 21.7,
    current: 21.7,
    allowed: 100,
    unit: "%",
  },
  {
    title: "Total users",
    percentage: 70,
    current: 28,
    allowed: 40,
  },
  {
    title: "Uptime",
    percentage: 98.3,
    current: 98.3,
    allowed: 100,
    unit: "%",
  },
]

export type KpiEntryExtended = Omit<
  KpiEntry,
  "current" | "allowed" | "unit"
> & {
  value: string
  color: string
}

const data3: KpiEntryExtended[] = [
  {
    title: "Base tier",
    percentage: 68.1,
    value: "$200",
    color: "bg-blue-600 dark:bg-blue-500",
  },
  {
    title: "On-demand charges",
    percentage: 20.8,
    value: "$61.1",
    color: "bg-blue-600 dark:bg-blue-500",
  },
  {
    title: "Caching",
    percentage: 11.1,
    value: "$31.9",
    color: "bg-gray-400 dark:bg-gray-600",
  },
]

const overviewsDates = overviews.map((item) => toDate(item.date).getTime())
const maxDate = toDate(Math.max(...overviewsDates))

export default function Overview() {
  const [selectedDates, setSelectedDates] = React.useState<
    DateRange | undefined
  >({
    from: subDays(maxDate, 30),
    to: maxDate,
  })

  return (
    <>
      <section aria-labelledby="current-billing-cycle">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">Workspace Details</p>
            <p className="text-sm text-gray-600">
              Workspace Name: Retail Analytics
            </p>
          </div>
          <div className="flex flex-col items-end space-x-2">
            <p className="text-sm text-gray-600">Workspace ID: RA-12345</p>
            <p className="text-sm text-gray-600">
              Workspace Key: retail-analytics-2023
            </p>
          </div>
        </div>

        <h1
          id="current-billing-cycle"
          className="text-md scroll-mt-10 font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
        >
          Current billing cycle
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-14 sm:mt-8 sm:grid-cols-2 lg:mt-10 xl:grid-cols-3">
          <ProgressBarCard
            title="Usage"
            change="+0.2%"
            value="68.1%"
            valueDescription="of allowed capacity"
            ctaDescription="Monthly usage resets in 12 days."
            ctaText="Manage plan."
            ctaLink="#"
            data={data}
          />
          <ProgressBarCard
            title="Workspace"
            change="+2.9%"
            value="21.7%"
            valueDescription="weekly active users"
            ctaDescription="Add up to 20 members in free plan."
            ctaText="Invite users."
            ctaLink="#"
            data={data2}
          />
          <CategoryBarCard
            title="Costs"
            change="-1.4%"
            value="$293.5"
            valueDescription="current billing cycle"
            subtitle="Current costs"
            ctaDescription="Set hard caps in"
            ctaText="cost spend management."
            ctaLink="#"
            data={data3}
          />
        </div>
      </section>
      <section aria-labelledby="usage-overview">
        <h1
          id="usage-overview"
          className="mt-16 scroll-mt-8 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
        >
          Overview
        </h1>
        <dl
          className={cx(
            "mt-10 grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
          )}
        >
          {categories.map((category) => (
            <ChartCard
              key={category.title}
              title={category.title}
              type={category.type}
              selectedDates={selectedDates}
              selectedPeriod="last-year"
            />
          ))}
        </dl>
      </section>
      <section aria-labelledby="chart-composition">
        <h1
          id="chart-composition"
          className="mt-16 scroll-mt-8 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
        >
          Chart Composition
        </h1>
        <ChartComposition />
      </section>
    </>
  )
}
