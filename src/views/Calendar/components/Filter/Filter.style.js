import styled, { css } from 'styled-components'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
import 'rc-calendar/assets/index.css'

import getZindex from '../../../../helpers/z-index.js'
import { Colors } from './../../../../shared/Colors.js'

const {
  lightBrown500: filterBackground,
  black: textDefault,
  grayLight100: inputBorder,
} = Colors
const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.16fr 0.1fr 0.2fr 0.15fr 0.1fr;
  grid-column-gap: 10px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${filterBackground};
  opacity: 0;
  height: 0;
  transition: opacity, transform, ease-in, 0.3s;
  transform: translateY(-200px);
  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      padding: 10px 15px;
      transform: translateY(0);
      height: 100px;
      @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
        height: 200px;
      }
      @media (min-width: 1024px) {
        padding: 0;
        height: 100px;
      }
      @media (max-width: 768px) {
        height: 100vh;
        z-index: ${getZindex('Filter') + 101};
      }
    `};
`

const FilterSelectorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 15rem;
  padding: 0;
  grid-column-gap: 15px;
  justify-content: flex-start;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
    width: auto;
  }
`

const IconClose = styled.span`
  position: absolute;
  display: block;
  padding: 5px;
  top: 5px;
  right: 5px;
  z-index: ${getZindex('IconClose')};
  cursor: pointer;

  @media (max-width: 768px) {
    top: 0;
    right: 0;
    padding: 15px;
  }
`

const FilterInputSeat = styled.input`
  position: relative;
  padding: 4px 7px;
  height: 1.75rem;
  width: 7rem;
  font-size: 0.75rem;
  text-align: center;
  line-height: 1.5;
  color: ${textDefault};
  border: 1px solid ${inputBorder};
  border-radius: 4px;
  transition: border 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &::-webkit-input-placeholder {
    text-align: center;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 15rem;
  }
`

const FilterTimePicker = styled(TimePicker)`
  width: unset;

  @media (min-width: 1024px) {
    width: 4rem;
  }
`

const FilterTitle = styled.h2`
  color: ${textDefault};
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 15px 0;
    margin: 0;
  }
`

const FilterText = styled.p`
  color: ${textDefault};
  padding-right: 15px;
`

export {
  FilterWrapper,
  IconClose,
  FilterTimePicker,
  FilterTitle,
  FilterText,
  FilterSelectorWrapper,
  FilterInputSeat,
}
