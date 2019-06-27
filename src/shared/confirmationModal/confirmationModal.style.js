import styled from 'styled-components'
import getZindex from '../../helpers/z-index'
import { Colors } from '../Colors'
import { Close } from '@material-ui/icons'
const { black: textDefault, white: backgroundDefault } = Colors

const ConfModal = styled.div`
  position: fixed;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  top: 20%;
  left: 0;
  right: 0;
  padding: 1rem 1rem 1rem 1.5rem;
  background-color: ${backgroundDefault};
  border: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: ${getZindex('confirmModal')};
  border-radius: 0.125rem;
  transition: all 0.5s ease-in-out;
  color: ${textDefault};
  @media (max-width: 910px) {
    width: 50%;
  }
  @media (max-width: 540px) {
    width: 90%;
  }
`
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  visibility: ${props => (props.open ? `visible` : `hidden`)};
  opacity: ${props => (props.open ? `1` : `0`)};
  transition: 0.5s;
  z-index: ${getZindex('ModalBackground')};
`

const CloseIcon = styled(Close)`
  font-size: 1.4rem;
  position: absolute;
  text-shadow: 0 1px 0 white;
  text-decoration: none;
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  opacity: 0.6;
  top: 1rem;
  cursor: pointer;
  right: 1rem;
    :hover {
      opacity: 1;
    }
  transition: opacity 0.5s;
  }
`
const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.3rem;
`
export { ConfModal, ModalBackground, CloseIcon, Controls }
