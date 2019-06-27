import styled from 'styled-components'
import { Colors } from '../../../../shared/Colors.js'

const { white: backgroundColor } = Colors

const StyledReservationMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 10px;
  top: 3%;
  background-color: ${backgroundColor};
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  transition: width ease-in-out 0.4s;
  max-width: 40px;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export { StyledReservationMenu }
