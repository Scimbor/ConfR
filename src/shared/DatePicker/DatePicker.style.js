import styled from 'styled-components'
import { Colors } from '../Colors'
const { blue100: inputBorder } = Colors

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${inputBorder};
  text-align: center;
  width: 85px;
`
export { Input }
