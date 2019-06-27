import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import moment from 'moment'

import CheckBoxComponent from '../../../../shared/Checkbox/Checkbox'
import ButtonComponent from '../../../../shared/Button/Button'
import {
  FilterWrapper,
  IconClose,
  FilterTitle,
  FilterText,
  FilterTimePicker,
  FilterSelectorWrapper,
  FilterInputSeat,
} from './Filter.style'
import { Close } from '@material-ui/icons'

const Filter = props => {
  const {
    isOpen,
    toggleFilter,
    setFilterIsApplied,
    fromHour,
    setFromHour,
    minSeats,
    setMinSeats,
    checked,
    setChecked,
    reload,
    setReload,
    loading,
  } = props
  const [isOpenFilter, setIsOpenFilter] = useState(isOpen)

  useEffect(() => {
    setIsOpenFilter(isOpen)
  }, [isOpen])

  function close() {
    toggleFilter()
  }

  function handleSeatsNumber(e) {
    const inputValue = Number(e.target.value)
    if (!isNaN(inputValue)) {
      setMinSeats(inputValue)
    }
  }

  function applyFilter(change, checked) {
    setChecked(checked)
    setFilterIsApplied(change)
    setReload(!reload)
    if (window.innerWidth <= 768) {
      toggleFilter()
    }
  }

  function clearFields() {
    setFromHour(moment())
    setMinSeats('')
    setFilterIsApplied(false)
    setChecked(false)
  }

  function cleanFilter() {
    if (!loading) {
      clearFields()
      applyFilter(false, false)
    }
  }

  return (
    <FilterWrapper isOpen={isOpenFilter}>
      <IconClose onClick={close}>
        <Close />
      </IconClose>
      <FormattedMessage id={'filterTitle'}>
        {txt => <FilterTitle>{txt}</FilterTitle>}
      </FormattedMessage>
      <FilterSelectorWrapper>
        <FormattedMessage id={'fromHour'}>
          {txt => <FilterText>{txt}</FilterText>}
        </FormattedMessage>
        <FilterTimePicker
          animation="slide-up"
          className="form__input"
          value={fromHour}
          defaultValue={fromHour}
          showSecond={false}
          clearIcon={<i />}
          onChange={setFromHour}
        />
      </FilterSelectorWrapper>
      <FormattedMessage id={'seats'}>
        {txt => (
          <FilterInputSeat
            min="1"
            placeholder={txt}
            value={minSeats}
            onChange={handleSeatsNumber}
          />
        )}
      </FormattedMessage>
      <FormattedMessage id={'myReservations'}>
        {txt => (
          <CheckBoxComponent
            checked={checked}
            setChecked={setChecked}
            text={txt}
          />
        )}
      </FormattedMessage>
      <FormattedMessage id={'clearFilter'}>
        {txt => (
          <ButtonComponent mobileFilterBtn onClick={cleanFilter}>
            {txt}
          </ButtonComponent>
        )}
      </FormattedMessage>
      <FormattedMessage id={'applyFilter'}>
        {txt => (
          <ButtonComponent
            mobileFilterBtn
            greenBtn
            onClick={applyFilter.bind(null, true, checked)}>
            {txt}
          </ButtonComponent>
        )}
      </FormattedMessage>
    </FilterWrapper>
  )
}

export default Filter
