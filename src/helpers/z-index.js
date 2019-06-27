const elements = [
  'RoomsContainer',
  'Room',
  'Reservation',
  'HoursList',
  'RoomsHeader',
  'CalendarHeader',
  'ReservationForm',
  'NoResults',
  'picker',
  'Filter',
  'Header',
  'Loader',
  'IconClose',
  'modal',
  'ModalBackground',
  'confirmModal',
]

const getZindex = el => {
  const index = elements.indexOf(el)
  return index !== -1 ? (index + 1) * 100 : new Error('element not found')
}

export default getZindex
