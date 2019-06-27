import styled from 'styled-components'
import { Colors } from './../../../../shared/Colors'
import getZindex from '../../../../helpers/z-index.js'
const { white: componentBackground, black: textDefault } = Colors

const NothingFound = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${componentBackground};
  z-index: ${getZindex('NoResults')};
`

const Header = styled.h2`
  color: ${textDefault};
  margin: 0;
  padding: 0 20px;
  margin-bottom: 15rem;
`

export { NothingFound, Header }
