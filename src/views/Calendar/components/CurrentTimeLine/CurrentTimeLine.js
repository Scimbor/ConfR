import React, { useState, useEffect } from 'react'
import { StyledTimeLine } from './CurrentTimeLine.style'
import { DAY_IN_MINUTES } from '../../../../constants'

export default function CurrentTimeLine(props) {
  const date = new Date()
  const [currentTimeInMinutes, setCurrentTimeInMinutes] = useState(
    date.getHours() * 60 + date.getMinutes()
  )
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimeInMinutes(currentTimeInMinutes + 1)
    }, 60000)
    return () => clearInterval(interval)
  }, [currentTimeInMinutes])

  const positionOfCurrentTime = `${(currentTimeInMinutes / 30) *
    props.halfHour}px`

  return (
    <StyledTimeLine
      isDisplay={currentTimeInMinutes < DAY_IN_MINUTES}
      positionOfCurrentTime={positionOfCurrentTime}
      isFormOpen={props.isFormOpen}
    />
  )
}
