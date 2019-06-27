import styled, { css } from 'styled-components'
import getZindex from '../../helpers/z-index'
import { CAL_FIRST_COLUMN_WIDTH } from '../../constants'

const CalendarWrapper = styled.div`
  scroll-behavior: smooth;
  height: 100%;
  position: relative;
  overflow: auto;
  width: 100%;
  transition: all 0.5s;
  @media (min-width: 768px) {
    ${props =>
      props.displacement &&
      css`
        max-width: calc(100vw - ${props.displacement}px);
      `}
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    li {
      position: relative;
      height: ${props => props.halfHour}px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: ${props => props.halfHour}px;
      :last-child {
        margin-bottom: ${props => props.halfHour * 1.5}px;
      }
    }
  }
`

const RoomsContainer = styled.div`
  display: flex;
  z-index: ${getZindex('RoomsContainer')};
  position: absolute;
  padding-top: ${props => props.padding}px;
  margin-top: ${props => props.padding / 2}px;
  top: 60px;
  left: ${CAL_FIRST_COLUMN_WIDTH}px;
  min-width: calc(100% - ${CAL_FIRST_COLUMN_WIDTH}px);
`

export { CalendarWrapper, RoomsContainer }
