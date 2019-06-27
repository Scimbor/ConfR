import styled from 'styled-components'
import getZindex from '../../../../helpers/z-index'
import { Colors } from '../../../../shared/Colors'
import { CAL_FIRST_COLUMN_WIDTH } from '../../../../constants'
const { white: calendarMainColor } = Colors

const HoursList = styled.div`
  position: sticky;
  width: ${CAL_FIRST_COLUMN_WIDTH}px;
  left: 0;
  background-color: ${calendarMainColor};
  z-index: ${getZindex('HoursList')};
`

export { HoursList }
