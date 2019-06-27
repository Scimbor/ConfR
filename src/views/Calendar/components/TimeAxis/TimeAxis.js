import React from 'react'
import uuid from 'uuid/v4'

import CurrentTimeLine from '../CurrentTimeLine/CurrentTimeLine'
import { HoursList } from './TimeAxis.style.js'

function TimeAxis(props) {
  const { isFormOpen, halfHour, date, today } = props

  function renderTimeline() {
    if (date.isSame(today, 'day')) {
      return <CurrentTimeLine isFormOpen={isFormOpen} halfHour={halfHour} />
    }
  }

  function renderHours() {
    return (
      <ul>
        {[...Array(24)].map((time, it) => {
          return <li key={uuid()}>{`0${it}:00`.slice(-5)}</li>
        })}
      </ul>
    )
  }

  return (
    <HoursList>
      {renderTimeline()}
      {renderHours()}
    </HoursList>
  )
}

export default TimeAxis
