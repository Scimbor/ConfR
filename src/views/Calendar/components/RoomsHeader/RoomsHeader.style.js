import styled from 'styled-components'
import {
  CALENDAR_HEADER_HEIGHT,
  CAL_FIRST_COLUMN_WIDTH,
} from '../../../../constants/index'
import getZindex from '../../../../helpers/z-index'
import { Colors } from '../../../../shared/Colors'

const { gray200: borderColor, white: calendarMainColor } = Colors

const COLUMN_WIDTH = 220

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  min-width: 100%;
  width: ${props =>
    props.roomsNumber * COLUMN_WIDTH + CAL_FIRST_COLUMN_WIDTH}px;
  height: ${CALENDAR_HEADER_HEIGHT}px;
  background-color: ${calendarMainColor};
  z-index: ${getZindex('RoomsHeader')};
  div {
    border-bottom: 3px solid;
    border-color: ${borderColor};
    width: ${COLUMN_WIDTH}px;
    &:first-child {
      margin-left: ${CAL_FIRST_COLUMN_WIDTH}px;
    }
  }
  p {
    margin: 0;
    line-height: 1.8rem;
    text-align: center;
    &:first-child {
      margin-top: 8px;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
  }
`

export { Header }
