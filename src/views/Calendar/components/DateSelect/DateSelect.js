import React from 'react'
import Calendar from 'rc-calendar'
import DatePicker from 'rc-calendar/lib/Picker'
import TimePicker from 'rc-time-picker'
import { FormattedMessage } from 'react-intl'
import 'rc-time-picker/assets/index.css'
import 'rc-calendar/assets/index.css'

import { DEFAULT_DATE_FORMAT } from '../../../../constants/index'
import { DateSelectorWrapper, FormSpan } from './DateSelectstyle'

function DateSelect(props) {
  const { date, setDate, textId } = props

  function timeOnChangeHandler(event) {
    if (event !== null) {
      setDate(event)
    }
  }

  return (
    <DateSelectorWrapper>
      <FormattedMessage id={textId}>
        {txt => <FormSpan>{txt}</FormSpan>}
      </FormattedMessage>
      <DatePicker
        animation="slide-up"
        value={date}
        calendar={<Calendar />}
        onChange={setDate}
        format={DEFAULT_DATE_FORMAT}>
        {({ value }) => (
          <input
            required
            className="form__input form__input--date"
            value={value ? value.format(DEFAULT_DATE_FORMAT) : ''}
            onChange={setDate}
            readOnly={true}
          />
        )}
      </DatePicker>
      <TimePicker
        required
        animation="slide-up"
        className="form__input"
        value={date}
        defaultValue={date}
        showSecond={false}
        allowEmpty={false}
        onChange={event => timeOnChangeHandler(event)}
      />
    </DateSelectorWrapper>
  )
}

export default DateSelect
