import styled from 'styled-components'
import { Colors } from '../../../../shared/Colors.js'
import getZindex from '../../../../helpers/z-index.js'

const { white: backgroundColor } = Colors

const Header = styled.header`
  background: ${backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  box-shadow: 0px 2px 10px 0px rgba(204, 204, 204, 1);
  position: relative;
  z-index: ${getZindex('Header')};
  @media (max-width: 1024px) {
    padding: 10px 50px;
  }
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`
const HeaderLogo = styled.img`
  max-height: 40px;
`

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 10px;
`
const ModalText = styled.p`
  padding-bottom: 1.5rem;
`
const ModalTitle = styled.h4`
  padding-bottom: 1rem;
  margin: 0;
`

const ButtonText = styled.span`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`
export { Header, HeaderLogo, ButtonsWrapper, ModalText, ModalTitle, ButtonText }
