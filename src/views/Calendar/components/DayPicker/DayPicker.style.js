import styled, { css } from 'styled-components'
import { Colors } from '../../../../shared/Colors'

const { black: dayHeaderColor } = Colors

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 20px 0;
  max-width: 100%;
  @media (min-width: 768px) {
    ${props =>
      props.displacement &&
      css`
        transition: all 0.5s;
        max-width: calc(100vw - ${props.displacement}px);
      `}
  }
  transition: all 0.5s;
`

const DayHeader = styled.span`
  font-size: 1rem;
  text-align: center;
  padding-right: 5px;
  margin: 0;
  color: ${dayHeaderColor};
`

const DateTextContainer = styled.div`
  display: block;
  text-align: center;
  width: 11rem;
`

export { DatePickerWrapper, DayHeader, DateTextContainer }
