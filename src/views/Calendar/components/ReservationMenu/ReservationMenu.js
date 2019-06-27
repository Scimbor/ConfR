import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Delete from '@material-ui/icons/Delete'
import { StyledReservationMenu } from './ReservationMenu.style'
import { RESERVATIONS_ENDPOINT } from '../../../../constants'
import { FormattedMessage } from 'react-intl'
import { request } from './../../../../helpers/request'
import ConfirmationModal from '../../../../../src/shared/confirmationModal/confirmationModal'

function ReservationMenu(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  async function removeReservation(id) {
    const response = await request(`${RESERVATIONS_ENDPOINT}/${id}`, 'DELETE')
    if (response.status === 204) props.setDisplayReservation(false)
  }

  function RenderConfirmationModal() {
    const root = document.getElementById('root')
    return ReactDOM.createPortal(
      <ConfirmationModal
        open={isModalOpen}
        closeHandler={() => setIsModalOpen(false)}
        cancel="cancel"
        save="delete"
        onConfirmHandler={event => onClickDeleteHandler(event)}>
        <FormattedMessage id={'deleteConfirmation'}>
          {txt => <h3>{txt}</h3>}
        </FormattedMessage>
        <div>
          <p>
            {props.room.roomNumber} {props.room.name}
          </p>
          <p>
            {props.date} {props.startTime} - {props.endTime}
          </p>
        </div>
      </ConfirmationModal>,
      root
    )
  }

  function onClickDeleteIconHandler(event) {
    event.stopPropagation()
    setIsModalOpen(true)
  }

  function onClickDeleteHandler(event) {
    event.stopPropagation()
    removeReservation(props.reservationId)
    setIsModalOpen(false)
  }

  return (
    <>
      <StyledReservationMenu active={props.active}>
        <button onClick={event => onClickDeleteIconHandler(event)}>
          <Delete />
        </button>
      </StyledReservationMenu>
      <RenderConfirmationModal />
    </>
  )
}

export default ReservationMenu
