import React from 'react'
import { FormattedMessage } from 'react-intl'
import ErrorIcon from './../../../../shared/Icons/ErrorIcon'
import moment from 'moment'
import uuid from 'uuid/v4'

import * as enTranslations from '../../../../locales/en.json'
import { ErrorWrapper, ErrorMessage, MessageWrapper } from './Error.style'

function Error(props) {
  const { room, dateFrom, dateTo, isConflict, unexpectedErr } = props

  const startTime = dateFrom.clone()
  const sixMonths = startTime.add(6, 'month')
  const errors = [
    {
      error: room === enTranslations.chooseRoom,
      errMsg: 'errEmptyRoomField',
    },
    {
      error: dateFrom.isAfter(dateTo),
      errMsg: 'errWrongReservationChronology',
    },
    {
      error: dateFrom.isSame(dateTo),
      errMsg: 'err0minReservation',
    },
    {
      error: dateTo.isAfter(moment().add(6, 'month')),
      errMsg: 'errTooLateReservation',
    },
    {
      error: dateTo.isAfter(sixMonths),
      errMsg: 'errTooLongReservation',
    },
    {
      error: isConflict === true,
      errMsg: 'errConflict',
    },
    {
      error: unexpectedErr === true,
      errMsg: 'errUnexpected',
    },
  ]

  function renderErrorMessage(errId) {
    return (
      <MessageWrapper key={uuid()}>
        <ErrorIcon />
        <ErrorMessage>
          <FormattedMessage id={errId} />
        </ErrorMessage>
      </MessageWrapper>
    )
  }

  return (
    <ErrorWrapper>
      {errors.map(({ error, errMsg }) => error && renderErrorMessage(errMsg))}
    </ErrorWrapper>
  )
}

export default Error
