import React, { useState } from 'react'
import { ReservationBlock, TimeRange } from './Reservation.style'
import ReservationMenu from '../ReservationMenu/ReservationMenu'
import useClickOutside from '../../../../shared/Hooks/useClickOutside'
import { Colors } from '../../../../shared/Colors.js'

const { lightGreenA700: activeBgColor, lightGreen600: ownerBgColor } = Colors

function Reservation(props) {
  const { ref, isComponentActive, setIsComponentActive } = useClickOutside(
    false
  )
  const [displayReservation, setDisplayReservation] = useState(true)

  function generateOwnerStyle(active, isOwner) {
    if (!isOwner) return null
    return { background: active ? activeBgColor : ownerBgColor }
  }

  function onClickActiveHandler() {
    setIsComponentActive(!isComponentActive)

    const scrollTo = ref.current.offsetTop - props.halfHourHeight / 2

    scrollTo < 0
      ? (props.calendar.current.scrollTop = 0)
      : (props.calendar.current.scrollTop = scrollTo)
  }

  return (
    <ReservationBlock
      style={generateOwnerStyle(isComponentActive, props.isOwner)}
      ref={ref}
      active={isComponentActive}
      isDisplay={displayReservation}
      isOwner={props.isOwner}
      onClick={() => onClickActiveHandler()}
      top={props.top}
      height={props.height}>
      {props.caption ? (
        <TimeRange height={props.height}>
          {props.startTime} - {props.endTime}
        </TimeRange>
      ) : null}
      {props.isOwner && (
        <ReservationMenu
          startTime={props.startTime}
          endTime={props.endTime}
          date={props.date}
          room={props.room}
          reservationId={props.id}
          setDisplayReservation={setDisplayReservation}
          active={isComponentActive}
        />
      )}
    </ReservationBlock>
  )
}

export default Reservation
