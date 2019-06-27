import styled from 'styled-components'
import getZindex from '../../../../helpers/z-index.js'
import { Colors } from './../../../../shared/Colors'

const { white: backgroundColor } = Colors
const LoaderWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height + 15}px;
  z-index: ${getZindex('Loader')};
  background-color: ${backgroundColor};
`

export { LoaderWrapper }
