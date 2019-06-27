import styled from 'styled-components'
import { Colors } from '../../../../shared/Colors.js'
import getZindex from '../../../../helpers/z-index'
const {
  lightBlue600: reservationColorDark,
  lightBlue700: reservationColorLight,
  gray500: borderColor,
} = Colors

const TimelineWrapper = styled.div`
  z-index: ${getZindex('Room')};
  display: grid;
  width: 220px;
  position: relative;
  height: ${props => props.height}px;
  :not(:first-of-type) {
    border-left: 1px dashed ${borderColor};
  }
  > div:nth-of-type(2n + 1) {
    background-color: ${reservationColorDark};
  }
  > div:nth-of-type(2n) {
    background-color: ${reservationColorLight};
  }
`

export { TimelineWrapper }
