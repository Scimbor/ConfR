import { useState, useEffect } from 'react'

export default function useCalendarHalfHourHeight(
  calendar,
  calendarHeaderHeight
) {
  const HEIGHT_BREAKPOINT = 640
  const DESKTOP_NUMBER_OF_VISIBLES_HALF_HOURS = 24
  const MOBILE_NUMBER_OF_VISIBLES_HALF_HOURS = 13
  const CALENDAR_HALF_HOURS_MIN_HEIGHT = 15
  const [height, setHeight] = useState()
  useEffect(() => {
    function calculateCalendarHalfHourHeight() {
      const calendarHeight = calendar.current.offsetHeight
      const visibleHalfHours =
        calendarHeight > HEIGHT_BREAKPOINT
          ? DESKTOP_NUMBER_OF_VISIBLES_HALF_HOURS
          : MOBILE_NUMBER_OF_VISIBLES_HALF_HOURS
      const calendarHalfHourHeight =
        (calendarHeight - calendarHeaderHeight) / visibleHalfHours

      return calendarHalfHourHeight < CALENDAR_HALF_HOURS_MIN_HEIGHT
        ? CALENDAR_HALF_HOURS_MIN_HEIGHT
        : calendarHalfHourHeight
    }
    function handleWindowResize() {
      setHeight(calculateCalendarHalfHourHeight)
    }
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [calendar, calendarHeaderHeight])

  return height
}
