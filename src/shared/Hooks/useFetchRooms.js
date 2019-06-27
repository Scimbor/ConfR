import { useState, useEffect } from 'react'
import { request } from '../../helpers/request'
import { DEFAULT_DATE_FORMAT, SERVER_POINT } from './../../constants/index.js'

async function fetchRooms() {
  const response = await request(`${SERVER_POINT}/rooms`, 'GET')
  const rooms = await response.json()
  if (rooms && rooms.length !== 0) {
    return rooms
  }
  return null
}

async function fetchRoomReservations(room, date) {
  const response = await request(
    `${SERVER_POINT}/rooms/${room.id}/reservations?date=${date.format(
      DEFAULT_DATE_FORMAT
    )}`,
    'GET'
  )
  const roomWithReservations = await response.json()
  if (roomWithReservations) {
    return roomWithReservations
  }
  return null
}

function reservationHasOwner(reservation, owner) {
  return reservation.owner && reservation.owner === owner
}

function filterRoom(room, owner) {
  const ownerReservations = room.reservations.filter(reservation =>
    reservationHasOwner(reservation, owner)
  )
  if (ownerReservations.length !== 0) {
    room.reservations = ownerReservations
    return room
  }
  return null
}

function filterRooms(data, minSeats, isChecked, email) {
  const updatedRooms = []
  const filteredRooms =
    minSeats && minSeats > 0
      ? data.filter(room => room.seats >= minSeats)
      : data
  for (const room of filteredRooms) {
    if (!isChecked) {
      updatedRooms.push(room)
    } else {
      if (room.reservations) {
        const newRoom = filterRoom(room, email)
        if (newRoom !== null) {
          updatedRooms.push(newRoom)
        }
      }
    }
  }
  return updatedRooms
}

function useFetchRooms(arg) {
  const { isFilterApplied, email, date, checked, minSeats, reload } = arg
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchUrl() {
      try {
        const roomsWithDetails = []
        const rooms = await fetchRooms()
        if (rooms !== null) {
          for (const room of rooms) {
            const roomWithReservations = await fetchRoomReservations(room, date)
            if (roomWithReservations !== null) {
              roomsWithDetails.push(roomWithReservations)
            }
          }

          Promise.all(roomsWithDetails).then(setData(roomsWithDetails))
          if (isFilterApplied && rooms.length !== 0) {
            const filteredData = filterRooms(
              roomsWithDetails,
              minSeats,
              checked,
              email
            )
            setData(filteredData)
          }
          setLoading(false)
        }
      } catch (err) {
        setError(err)
      }
    }

    fetchUrl()
    return () => setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, email, isFilterApplied, reload])

  return [error, data, loading]
}

export default useFetchRooms
