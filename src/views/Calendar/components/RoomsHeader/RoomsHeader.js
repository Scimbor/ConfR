import React from 'react'
import { FormattedMessage } from 'react-intl'
import uuid from 'uuid/v4'
import { Header } from './RoomsHeader.style.js'

function renderRoomNumber(roomNumber) {
  if (roomNumber) {
    return roomNumber
  }
  return (Math.random() * 9.8).toFixed(1)
}

function renderSeatsNumber(seats) {
  if (seats) {
    return seats
  }
  return Math.floor(Math.random() * 16)
}

function renderRoomDetails(rooms) {
  return rooms.map(room => (
    <div key={uuid()}>
      <p>{renderRoomNumber(room.roomNumber)}</p>
      <p>
        {room.name}({renderSeatsNumber(room.seats)})
      </p>
    </div>
  ))
}

function renderRoomsHeader(loading, rooms) {
  if (loading) {
    return <FormattedMessage id={'loading'} />
  }
  return renderRoomDetails(rooms)
}

function RoomsHeader(props) {
  const { loading, rooms } = props

  return (
    <Header roomsNumber={rooms.length}>
      {renderRoomsHeader(loading, rooms)}
    </Header>
  )
}

export default RoomsHeader
