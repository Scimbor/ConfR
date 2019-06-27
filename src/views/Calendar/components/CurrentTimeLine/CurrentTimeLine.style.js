import styled from 'styled-components'
import { Colors } from '../../../../shared/Colors.js'

const { lightGreen700: currentTimeLineColor } = Colors

const StyledTimeLine = styled.span`
  display: ${props => (props.isDisplay ? 'block' : 'none')}
  position: absolute;
  right: -4px;
  top: ${props => props.positionOfCurrentTime};
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 20px;
  border-color: ${'transparent transparent transparent' + currentTimeLineColor};
  :before {
    content: '';
    border-bottom: ${'2px dashed' + currentTimeLineColor};
    /* full width - HoursList width - right position */
    width: ${props =>
      props.isFormOpen
        ? 'calc(66vw - 80px - 4px)'
        : 'calc(100vw - 80px - 4px)'};
    height: 0;
    position: absolute;
    top: -1px;
    left: -20px;
  }
`

export { StyledTimeLine }
