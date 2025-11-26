"use client"

import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export type CalendarProps = {
  mode?: "single" | "range"
  selected?: Date | { from: Date; to?: Date }
  onSelect?: (date: Date | { from: Date; to?: Date } | undefined) => void
  className?: string
  disabled?: (date: Date) => boolean
  showOutsideDays?: boolean
}

function Calendar({
  mode = "single",
  selected,
  onSelect,
  className,
  disabled,
  showOutsideDays = true,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const isSelected = (date: Date) => {
    if (!selected) return false

    if (mode === "single" && selected instanceof Date) {
      return (
        date.getDate() === selected.getDate() &&
        date.getMonth() === selected.getMonth() &&
        date.getFullYear() === selected.getFullYear()
      )
    }

    if (mode === "range" && typeof selected === "object" && "from" in selected) {
      const { from, to } = selected
      if (!to) {
        return (
          date.getDate() === from.getDate() &&
          date.getMonth() === from.getMonth() &&
          date.getFullYear() === from.getFullYear()
        )
      }
      return date >= from && date <= to
    }

    return false
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const handleDateClick = (date: Date) => {
    if (disabled && disabled(date)) return

    if (mode === "single") {
      onSelect?.(date)
    } else if (mode === "range") {
      if (!selected || typeof selected !== "object" || !("from" in selected)) {
        onSelect?.({ from: date })
      } else if (!selected.to) {
        if (date < selected.from) {
          onSelect?.({ from: date, to: selected.from })
        } else {
          onSelect?.({ from: selected.from, to: date })
        }
      } else {
        onSelect?.({ from: date })
      }
    }
  }

  const renderDays = () => {
    const days = []
    const totalDays = daysInMonth(currentMonth)
    const firstDay = firstDayOfMonth(currentMonth)

    // Previous month days
    if (showOutsideDays) {
      const prevMonthDays = daysInMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
      )
      for (let i = firstDay - 1; i >= 0; i--) {
        const date = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() - 1,
          prevMonthDays - i
        )
        days.push(
          <button
            key={`prev-${i}`}
            onClick={() => handleDateClick(date)}
            className={cn(
              "h-9 w-9 p-0 font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md",
              disabled && disabled(date) && "opacity-50 cursor-not-allowed"
            )}
            disabled={disabled && disabled(date)}
          >
            {prevMonthDays - i}
          </button>
        )
      }
    } else {
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="h-9 w-9" />)
      }
    }

    // Current month days
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const selected = isSelected(date)
      const today = isToday(date)

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          className={cn(
            "h-9 w-9 p-0 font-normal rounded-md hover:bg-accent hover:text-accent-foreground",
            selected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
            today && !selected && "bg-accent text-accent-foreground",
            disabled && disabled(date) && "opacity-50 cursor-not-allowed"
          )}
          disabled={disabled && disabled(date)}
        >
          {day}
        </button>
      )
    }

    // Next month days
    if (showOutsideDays) {
      const remainingDays = 42 - days.length // 6 rows * 7 days
      for (let i = 1; i <= remainingDays; i++) {
        const date = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() + 1,
          i
        )
        days.push(
          <button
            key={`next-${i}`}
            onClick={() => handleDateClick(date)}
            className={cn(
              "h-9 w-9 p-0 font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md",
              disabled && disabled(date) && "opacity-50 cursor-not-allowed"
            )}
            disabled={disabled && disabled(date)}
          >
            {i}
          </button>
        )
      }
    }

    return days
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  return (
    <div className={cn("p-3 bg-background", className)}>
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={previousMonth}
          className="h-7 w-7"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <div className="font-medium">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextMonth}
          className="h-7 w-7"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="h-9 w-9 text-center text-sm font-medium text-muted-foreground flex items-center justify-center"
          >
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  )
}

export { Calendar }
