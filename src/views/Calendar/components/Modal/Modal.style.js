import styled, { css } from 'styled-components'
import { Colors } from '../../../../shared/Colors.js'
import getZindex from '../../../../helpers/z-index.js'

const { white: textDefault } = Colors

const OptionsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
`
const ListItem = styled.li`
  padding: 10px;
`

const ModalHeader = styled.h1`
  font-size: 5rem;
  text-align: center;
  padding-bottom: 2%;
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const Exit = styled.button`
  position: absolute;
  top: 10%;
  right: 5%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  :before,
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background-color: ${textDefault};
    transition: opacity 0.5s;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: ${getZindex('modal')};
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.9);
  color: ${textDefault};
  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

export { OptionsList, ListItem, ModalHeader, Exit, ModalWrapper }
