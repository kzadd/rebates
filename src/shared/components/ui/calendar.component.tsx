import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@app/shared/utils/shadcn.utils'

type CalendarProps = React.ComponentProps<typeof DayPicker>

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      className={cn('p-3', className)}
      classNames={{
        caption: 'relative flex items-center justify-center pt-1',
        caption_label: 'text-sm font-medium',
        cell: cn(
          'relative text-center text-sm [&:has([aria-selected])]:bg-primary-100 [&:has([aria-selected].day-outside)]:bg-secondary-200 [&:has([aria-selected].day-range-end)]:rounded-r-lg',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-lg [&:has(>.day-range-start)]:rounded-l-lg first:[&:has([aria-selected])]:rounded-l-lg last:[&:has([aria-selected])]:rounded-r-lg'
            : '[&:has([aria-selected])]:rounded-lg'
        ),
        day: 'h-8 w-8 rounded-lg p-0 hover:bg-primary-100 hover:text-primary',
        day_disabled: 'bg-disabled opacity-80',
        day_hidden: 'invisible',
        day_outside:
          'day-outside text-disabled-foreground aria-selected:bg-secondary-200 aria-selected:text-white',
        day_range_end: 'day-range-end',
        day_range_middle: 'aria-selected:bg-primary-100 aria-selected:text-primary',
        day_range_start: 'day-range-start',
        day_selected:
          'bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white ',
        day_today: 'border border-primary bg-primary-100 text-primary',
        head_cell: 'w-8 rounded-lg text-[0.8rem] font-normal text-muted',
        head_row: 'flex',
        month: 'space-y-4',
        months: 'flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0',
        nav: 'flex items-center space-x-1',
        nav_button:
          'flex h-7 w-7 items-center justify-center rounded-lg border border-primary text-primary opacity-50 hover:bg-primary-100 hover:opacity-100',
        nav_button_next: 'absolute right-1',
        nav_button_previous: 'absolute left-1',
        row: 'm-1 flex w-full',
        table: 'w-full border-collapse space-y-1',
        ...classNames
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'
