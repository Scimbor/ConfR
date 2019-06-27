import styled from 'styled-components'
import { Colors } from '../../../../shared/Colors.js'
import getZindex from '../../../../helpers/z-index'

const { white: textDefault } = Colors
const minCaptionHeight = 50

const ReservationBlock = styled.div`
  display: ${props => (props.isDisplay ? 'flex' : 'none')}
  position: absolute;
  top: ${props => props.top}px;
  height: ${props => props.height}px;
  width: 200px;
  left: 10px;
  z-index: ${getZindex('Reservation')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.2rem;
  border-radius: 10px;
  justify-content: ${props => props.height <= minCaptionHeight && 'center'};
  color: ${textDefault};
  transition: all ease-in-out 0.3s;
  min-height: 1px;
  cursor: ${props => (props.isOwner ? 'pointer' : 'default')};
  div {
    width: ${props => (props.active ? '100%' : '0%')};
    svg {
      width: ${props => (props.active ? '100%' : '0%')};
    }
  }
`

const TimeRange = styled.span`
  padding-left: 10px;
  padding-top: ${props => (props.height >= minCaptionHeight ? 20 : 0)}px;
`

export { ReservationBlock, TimeRange }
