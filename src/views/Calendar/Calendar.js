import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'

import useCalendarHalfHourHeight from '../../shared/Hooks/useCalendarHalfHourHeight'
import RoomColumn from './components/RoomColumn/RoomColumn'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import TimeAxis from './components/TimeAxis/TimeAxis'
import TimeGrid from './components/TimeGrid/TimeGrid'
import ReservationForm from './components/ReservationForm/ReservationForm'
import DayPicker from './components/DayPicker/DayPicker'
import RoomsHeader from './components/RoomsHeader/RoomsHeader'
import NoResults from './components/NoResults/NoResults'
import {
  DEFAULT_DATE_FORMAT,
  CALENDAR_HEADER_HEIGHT,
} from '../../constants/index'
import useFetchRooms from './../../shared/Hooks/useFetchRooms'
import CalendarLoader from './components/CalendarLoader/CalendarLoader'
import { getUserEmail } from './../../helpers/getUserEmail'
import { CalendarWrapper, RoomsContainer } from './Calendar.style.js'

function Calendar() {
  const today = moment()
  const calendar = useRef()
  const email = getUserEmail()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [reservationFormWidth, setReservationFormWidth] = useState(0)
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false)
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [date, setDate] = useState(today)
  const [isFilterApplied, setFilterIsApplied] = useState(false)
  const [fromHour, setFromHour] = useState(moment())
  const [checked, setChecked] = useState(false)
  const [minSeats, setMinSeats] = useState('')
  const [reload, setReload] = useState(false)
  const calendarHalfHourHeight = useCalendarHalfHourHeight(
    calendar,
    CALENDAR_HEADER_HEIGHT
  )
  const [, rooms, loading] = useFetchRooms({
    isFilterApplied: isFilterApplied,
    email: email,
    date: date,
    checked: checked,
    minSeats: minSeats,
    reload: reload,
  })

  useEffect(() => {
    function nextDay() {
      handleDateChange(moment(date, DEFAULT_DATE_FORMAT).add(1, 'days'))
    }

    function prevDay() {
      handleDateChange(moment(date, DEFAULT_DATE_FORMAT).add(-1, 'days'))
    }

    function handleArrowKeyDown(e) {
      if (document.body.classList.contains('no-scroll')) return
      const keyCode = e.keyCode
      if (keyCode === 39) {
        e.preventDefault()
        nextDay()
      }
      if (keyCode === 37) {
        e.preventDefault()
        prevDay()
      }
    }
    scrollTo(fromHour)
    if (loading) setIsOpenDatePicker(false)
    document.addEventListener('keydown', handleArrowKeyDown)
    return () => {
      document.removeEventListener('keydown', handleArrowKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  function openReservationForm() {
    !loading && setIsFormOpen(true)
  }

  function closeReservationForm() {
    setIsFormOpen(false)
  }

  function toggleFilter() {
    !loading && setIsOpenFilter(!isOpenFilter)
  }

  function handleDateChange(date) {
    !loading && setDate(date)
  }

  function handleOpenDatePicker(isOpenDatePicker) {
    !loading && setIsOpenDatePicker(isOpenDatePicker)
  }

  function scrollTo(time) {
    let scrollToHour = time.hour() + time.minutes() / 60
    const currentTime = moment().format('HH.mm')
    if (date.isSame(today, 'day') && !isFilterApplied) {
      const HALF_HOUR = 0.3
      scrollToHour = currentTime - HALF_HOUR
    }
    calendar.current.scrollTop =
      scrollToHour * (calendarHalfHourHeight * 2) + calendarHalfHourHeight / 2
  }

  return (
    <>
      <Header
        openReservationForm={openReservationForm}
        handleOpenDatePicker={handleOpenDatePicker}
        toggleFilter={toggleFilter}
        isFilterApplied={isFilterApplied}
        loading={loading}
        isFormOpen={isFormOpen}
      />
      <Filter
        isOpen={isOpenFilter}
        toggleFilter={toggleFilter}
        scrollTo={scrollTo}
        setFilterIsApplied={setFilterIsApplied}
        fromHour={fromHour}
        setFromHour={setFromHour}
        minSeats={minSeats}
        setMinSeats={setMinSeats}
        checked={checked}
        setChecked={setChecked}
        isFilterApplied={isFilterApplied}
        setReload={setReload}
        reload={reload}
        loading={loading}
      />
      <DayPicker
        displacement={isFormOpen && reservationFormWidth}
        handleDateChange={handleDateChange}
        date={date}
        today={today}
        handleOpenDatePicker={handleOpenDatePicker}
        isOpenDatePicker={isOpenDatePicker}
        loading={loading}
        isOpenFilter={isOpenFilter}
      />
      <CalendarWrapper
        halfHour={calendarHalfHourHeight}
        ref={calendar}
        displacement={isFormOpen && reservationFormWidth}>
        {calendar.current && (
          <NoResults isChange={isFilterApplied} rooms={rooms} />
        )}
        {calendar.current && (
          <CalendarLoader
            loading={loading}
            height={calendar.current.clientHeight}
          />
        )}
        {!loading && rooms && (
          <>
            <RoomsHeader loading={loading} rooms={rooms} />
            <TimeAxis
              date={date}
              today={today}
              isFormOpen={isFormOpen}
              halfHour={calendarHalfHourHeight}
            />
            <RoomsContainer padding={calendarHalfHourHeight / 2}>
              <TimeGrid />
              {rooms.map(room => (
                <RoomColumn
                  room={room}
                  calendar={calendar}
                  height={calendarHalfHourHeight}
                  key={room.id}
                  id={room.id}
                  owner={email}
                />
              ))}
            </RoomsContainer>
          </>
        )}
      </CalendarWrapper>
      {!loading && rooms.length > 0 && (
        <ReservationForm
          currentDate={date}
          isOpen={isFormOpen}
          setIsOpen={setIsFormOpen}
          rooms={rooms}
          closeReservationForm={closeReservationForm}
          setReservationFormWidth={setReservationFormWidth}
          isOpenFilter={isOpenFilter}
          owner={email}
        />
      )}
    </>
  )
}

export default Calendar
