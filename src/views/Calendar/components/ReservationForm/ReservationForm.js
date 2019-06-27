import React, { useState, useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import 'rc-time-picker/assets/index.css'
import 'rc-calendar/assets/index.css'
import moment from 'moment'
import RoomSelect from './../RoomSelect/RoomSelect'
import DateSelect from '../DateSelect/DateSelect'
import ConfirmationModal from '../../../../../src/shared/confirmationModal/confirmationModal'
import { request } from './../../../../helpers/request'
import * as enTranslations from '../../../../locales/en.json'
import Error from './../Error/Error'
import CloseButton from './../../../../shared/CloseButton/CloseButton'
import ButtonComponent from './../../../../shared/Button/Button'
import { roundTime } from './../../../../helpers/roundTime'
import {
  FormWrapper,
  FormHeader,
  Form,
  ReservationSettings,
  FormButton,
  ModalTitle,
  ModalText,
} from './ReservationForm.style'
import {
  DEFAULT_DATE_FORMAT,
  TIME_FORMAT,
  SERVER_POINT,
} from '../../../../constants'

function ReservationForm(props) {
  const {
    currentDate,
    isOpen,
    setReservationFormWidth,
    closeReservationForm,
    rooms,
    setIsOpen,
    isOpenFilter,
  } = props

  const [room, setRoom] = useState(enTranslations.chooseRoom)
  const [dateFrom, setDateFrom] = useState()
  const [dateTo, setDateTo] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isConflict, setIsConflict] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [unexpectedErr, setUnexpectedErr] = useState(false)
  const sectionRef = useRef()

  useEffect(() => {
    actualizeDateFields(currentDate)
    if (isOpen) {
      changeFormWidth()
      window.addEventListener('resize', changeFormWidth)
    } else {
      window.removeEventListener('resize', changeFormWidth)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate, isOpen])

  function findRoomId(choosedRoom) {
    const foundRoom = rooms.filter(item => item.name === choosedRoom)
    return foundRoom.length !== 0 ? foundRoom[0].id : null
  }

  function findRoomNumber(choosedRoom) {
    const foundRoom = rooms.filter(item => item.name === choosedRoom)
    return foundRoom.length !== 0 ? foundRoom[0].roomNumber : null
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitted(true)
  }

  function handleRoomChange(e) {
    setRoom(e.target.value)
  }

  function closeModal() {
    setOpenModal(false)
    setIsOpen(false)
    actualizeDateFields(currentDate)
    setRoom(enTranslations.chooseRoom)
    setIsSubmitted(false)
  }

  function actualizeDateFields(newDate) {
    const dateFrom = roundTime(newDate).floorTime
    const dateTo = roundTime(newDate).ceilTime
    setDateFrom(dateFrom)
    setDateTo(dateTo)
  }

  function isValid() {
    if (dateFrom && dateTo && room) {
      const startTime = dateFrom.clone()
      const sixMonths = startTime.add(6, 'month')
      return !(
        room === enTranslations.chooseRoom ||
        dateFrom.isAfter(dateTo) ||
        dateFrom.isSame(dateTo) ||
        sixMonths.isBefore(dateTo) ||
        dateTo.isAfter(moment().add(6, 'month'))
      )
    }
  }

  function IsDaylightSavingTime(date) {
    return moment(date, moment.ISO_8601).isDST()
      ? moment(date, moment.ISO_8601).add(2, 'h')
      : moment(date, moment.ISO_8601).add(1, 'h')
  }

  async function addReservation() {
    const payload = {
      roomIds: [Number(findRoomId(room))],
      from: IsDaylightSavingTime(dateFrom),
      to: IsDaylightSavingTime(dateTo),
      subject: 'subject',
      content: 'content',
    }

    const response = await request(
      `${SERVER_POINT}/reservations`,
      'POST',
      payload
    )
    if (
      response.status === 404 ||
      response.status === 409 ||
      response.status === 400
    ) {
      setUnexpectedErr(true)
      return
    }
    const reservationsData = await response.json()
    if (reservationsData === null) {
      setIsConflict(true)
    } else {
      setIsConflict(false)
      setOpenModal(true)
    }
  }

  function applyForm() {
    const isFormValid = isValid()
    if (isFormValid) {
      addReservation()
    }
  }

  function closeForm() {
    const floorTime = roundTime(currentDate).floorTime
    const ceilTime = roundTime(currentDate).ceilTime
    setDateFrom(floorTime)
    setDateTo(ceilTime)
    setRoom(enTranslations.chooseRoom)
    closeReservationForm()
    setIsSubmitted(false)
  }

  function changeFormWidth() {
    const formWidth = sectionRef.current.clientWidth
    setReservationFormWidth(formWidth)
  }

  function renderError() {
    if (dateFrom && dateTo) {
      return (
        <Error
          room={room}
          dateFrom={dateFrom}
          dateTo={dateTo}
          isConflict={isConflict}
          unexpectedErr={unexpectedErr}
        />
      )
    }
  }

  function renderInfoModal() {
    return (
      <ConfirmationModal
        open={openModal}
        onConfirmHandler={closeModal}
        closeHandler={closeModal}
        save="ok">
        <FormattedMessage id="reservationSuccess">
          {txt => <ModalTitle> {txt} </ModalTitle>}
        </FormattedMessage>
        <ModalText>
          {findRoomNumber(room)} {room} <br />
          {dateFrom.format(DEFAULT_DATE_FORMAT)} {dateFrom.format(TIME_FORMAT)}{' '}
          - {dateTo.format(TIME_FORMAT)}
        </ModalText>
      </ConfirmationModal>
    )
  }

  return (
    <>
      <FormWrapper isOpen={isOpen} ref={sectionRef} isOpenFilter={isOpenFilter}>
        <FormattedMessage id={'newBooking'}>
          {txt => <FormHeader>{txt}</FormHeader>}
        </FormattedMessage>
        <CloseButton onClick={closeForm} className="form__close" />
        <Form onSubmit={handleSubmit}>
          <div>
            <RoomSelect
              room={room}
              rooms={rooms}
              handleRoomChange={handleRoomChange}
              textId="chooseRoom"
            />
            <ReservationSettings>
              <DateSelect date={dateFrom} setDate={setDateFrom} textId="from" />
              <DateSelect date={dateTo} setDate={setDateTo} textId="to" />
            </ReservationSettings>
            {isSubmitted && renderError()}
          </div>
          <FormButton onClick={applyForm}>
            <FormattedMessage id={'apply'}>
              {txt => <ButtonComponent greenBtn>{txt}</ButtonComponent>}
            </FormattedMessage>
          </FormButton>
        </Form>
      </FormWrapper>
      {openModal && renderInfoModal()}
    </>
  )
}

export default ReservationForm
