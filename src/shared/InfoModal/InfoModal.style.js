import styled from 'styled-components'
import getZindex from '../../helpers/z-index'
import { Colors } from '../Colors'
const { black: textDefault, white: backgroundDefault } = Colors

const Modal = styled.div`
  position: fixed;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  top: 40%;
  left: 0;
  right: 0;
  padding: 2rem;
  background-color: ${backgroundDefault};
  border: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: ${getZindex('confirmModal')};
  border-radius: 0.125rem;
  transition: all 0.5s ease-in-out;
  color: ${textDefault};
  @media (max-width: 540px) {
    width: 90%;
  }
`
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${props => (props.open ? `visible` : `hidden`)};
  opacity: ${props => (props.open ? `1` : `0`)};
  transition: 0.5s;
  z-index: ${getZindex('ModalBackground')};
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`

export { Modal, ModalContent, ModalWrapper }
