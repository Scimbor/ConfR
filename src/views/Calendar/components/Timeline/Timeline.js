import React from 'react'
import uuid from 'uuid/v4'

import { TimelineWrapper } from './Timeline.style.js'
import Reservation from '../Reservation/Reservation'
import { parseTime } from '../../../../helpers'

function calculateReservation(reservation, stepHeight, email) {
  const { id, startTime, endTime, owner } = reservation
  const stepsFromStart = parseTime(startTime) * 2
  const top = stepsFromStart * stepHeight
  const height = (parseTime(endTime) - parseTime(startTime)) * 2 * stepHeight
  const caption = height > stepHeight
  const isOwner = owner === email
  return { id, startTime, endTime, top, height, caption, isOwner }
}

function renderReservations(
  reservations,
  stepHeight,
  calendar,
  room,
  date,
  email
) {
  return (
    reservations &&
    reservations.map(reservation => {
      const reservationData = calculateReservation(
        reservation,
        stepHeight,
        email
      )
      return (
        <Reservation
          date={date}
          room={room}
          halfHourHeight={stepHeight}
          calendar={calendar}
          id={reservationData.id}
          key={uuid()}
          {...reservationData}
        />
      )
    })
  )
}

function Timeline(props) {
  const STEP_HEIGHT = props.height
  return (
    <TimelineWrapper height={STEP_HEIGHT * 48}>
      {renderReservations(
        props.reservationsList,
        STEP_HEIGHT,
        props.calendar,
        props.room,
        props.date,
        props.owner
      )}
    </TimelineWrapper>
  )
}

export default Timeline
