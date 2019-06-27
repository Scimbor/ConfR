import React from 'react'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import moment from 'moment'
import { FormattedMessage } from 'react-intl'

import DatePicker from '../../../../shared/DatePicker/DatePicker'
import ButtonComponent from '../../../../shared//Button/Button.js'
import {
  DatePickerWrapper,
  DateTextContainer,
  DayHeader,
} from './DayPicker.style.js'
import { DEFAULT_DATE_FORMAT } from '../../../../constants/index'

function DayPicker(props) {
  const {
    displacement,
    handleDateChange,
    date,
    today,
    handleOpenDatePicker,
    isOpenDatePicker,
    isOpenFilter,
    loading,
  } = props

  function addDay() {
    handleDateChange(moment(date, DEFAULT_DATE_FORMAT).add(1, 'days'))
  }

  function substractDay() {
    handleDateChange(moment(date, DEFAULT_DATE_FORMAT).add(-1, 'days'))
  }

  function renderTodayPrefix() {
    if (
      date.format(DEFAULT_DATE_FORMAT) === today.format(DEFAULT_DATE_FORMAT)
    ) {
      return (
        <FormattedMessage id={'today'}>
          {txt => <DayHeader>{txt}</DayHeader>}
        </FormattedMessage>
      )
    }
  }

  return (
    <DatePickerWrapper displacement={displacement}>
      <ButtonComponent switchBtn switchBtnPrev onClick={substractDay}>
        <ArrowBack />
      </ButtonComponent>
      <DateTextContainer>
        {renderTodayPrefix()}
        <DatePicker
          handleDateChange={handleDateChange}
          date={date}
          handleOpenDatePicker={handleOpenDatePicker}
          isOpenDatePicker={isOpenDatePicker}
          loading={loading}
          isOpenFilter={isOpenFilter}
        />
      </DateTextContainer>
      <ButtonComponent switchBtn onClick={addDay}>
        <ArrowForward />
      </ButtonComponent>
    </DatePickerWrapper>
  )
}

export default DayPicker
