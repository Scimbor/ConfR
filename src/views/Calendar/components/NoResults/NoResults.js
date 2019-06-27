import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { NothingFound, Header } from './NoResults.style.js'

function checkResults(isChange, rooms) {
  if (isChange && rooms && rooms.length === 0) {
    return true
  }
  return false
}

function NoResults(props) {
  const { isChange, rooms, calendarTop } = props
  const [top, setTop] = useState(calendarTop)

  useEffect(() => {
    setTop(calendarTop)
  }, [calendarTop, isChange])

  return (
    checkResults(isChange, rooms) && (
      <NothingFound top={top}>
        <FormattedMessage id={'noResults'}>
          {txt => <Header>{txt}</Header>}
        </FormattedMessage>
      </NothingFound>
    )
  )
}

export default NoResults
