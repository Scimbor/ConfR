import React from 'react'
import Timeline from '../Timeline/Timeline'

function RoomColumn(props) {
  return (
    props.room && (
      <Timeline
        date={props.date}
        room={props.room}
        calendar={props.calendar}
        reservationsList={props.room.reservations}
        height={props.height}
        owner={props.owner}
      />
    )
  )
}

export default RoomColumn
