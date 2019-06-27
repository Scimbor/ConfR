import React, { useState, useEffect } from 'react'
import Calendar from 'rc-calendar'
import Picker from 'rc-calendar/lib/Picker'
import 'rc-calendar/assets/index.css'
import moment from 'moment'
import 'moment/locale/pl'
import 'moment/locale/en-gb'
import { Input } from './DatePicker.style'
import { DEFAULT_DATE_FORMAT } from '../../constants/index'
import { LOCALE } from '../../locales/LocaleRcCalendar'
import getZindex from '../../helpers/z-index.js'

function DatePicker(props) {
  const navigatorLang = window.navigator.language.toLowerCase().split('-')[0]
  const language = LOCALE[navigatorLang] && LOCALE[navigatorLang].language
  const localeToSet = language && LOCALE[navigatorLang].config
  const currentDate = moment(props.date).locale(language)
  const format = DEFAULT_DATE_FORMAT
  const [date, setDate] = useState(currentDate)
  const [isOpen, setOpen] = useState(false)
  const [lastSetDate, setLastDate] = useState(currentDate)
  const [customStyles, setCustomStyles] = useState({
    zIndex: getZindex('picker'),
  })

  useEffect(() => {
    setDate(moment(props.date).locale(language))
    setLastDate(moment(props.date).locale(language))
  }, [language, props.date])

  useEffect(() => {
    setOpen(props.isOpenDatePicker)
    setDate(props.date)
    if (props.isOpenFilter) {
      if (window.innerWidth > 1024) {
        setCustomStyles({ marginTop: '100px', zIndex: getZindex('picker') })
      } else {
        setCustomStyles({ marginTop: '200px', zIndex: getZindex('picker') })
      }
    } else {
      setCustomStyles({ zIndex: getZindex('picker') })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isOpenDatePicker, props.isOpenFilter])

  function onOk() {
    setOpen(false)
    setLastDate(date)
    props.handleDateChange(date)
    props.handleOpenDatePicker(false)
  }

  function onClear() {
    setOpen(false)
    props.handleOpenDatePicker(false)
    setDate(lastSetDate)
  }

  function openDatePicker() {
    if (!props.loading) {
      // setOpen(true)
      props.handleOpenDatePicker(true)
    }
  }

  const RcCalendar = (
    <Calendar
      defaultValue={moment()}
      format={format}
      showOk={true}
      locale={localeToSet}
      onClear={onClear}
      onChange={newDate => setDate(newDate)}
      onOk={onOk}
      className="datePicker"
    />
  )

  return (
    <Picker
      animation="slide-up"
      open={isOpen}
      style={customStyles}
      value={date}
      isOpenFilter={props.isOpenFilter}
      calendar={RcCalendar}>
      {({ value }) => {
        return (
          <Input
            readOnly
            onClick={() => openDatePicker()}
            value={value ? value.format(format) : ''}
          />
        )
      }}
    </Picker>
  )
}

export default DatePicker
