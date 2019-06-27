import styled, { css } from 'styled-components'
import getZindex from './../../../../helpers/z-index'
import { Colors } from './../../../../shared/Colors.js'

const {
  white: formBackground,
  black: textDefault,
  lightGreenA400: headerUnderline,
} = Colors

const FormWrapper = styled.section`
  width: calc(100vw / 3);
  height: calc(100vh - 90px);
  position: fixed;
  top: 90px;
  right: 0;
  z-index: ${getZindex('ReservationForm')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.5s;
  padding: 30px 30px 30px 15px;
  background-color: ${formBackground};
  color: ${textDefault};
  @media (max-width: 1024px) {
    top: 70px;
    width: 35vw;
  }
  @media (max-width: 768px) {
    padding: 100px 10px 10px 10px;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
  ${props =>
    props.isOpenFilter &&
    css`
      @media (min-width: 768px) {
        top: 250px;
        height: calc(70vh - 250px);
      }
      @media (min-width: 1024px) {
        top: 210px;
        height: calc(70vh - 90px);
      }
    `}
  ${props =>
    props.isOpen &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}

  .form__input {
    min-width: 70px;
    > input {
      padding: 20px 10px;
    }
  }
  .form__input--date {
    padding: 10px;
    min-width: 120px;
    width: 100%;
  }
  .form__close {
    position: absolute;
    top: 30px;
    right: 30px;
    @media (max-width: 768px) {
      top: 75px;
      right: 15px;
    }
  }
`

const FormHeader = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${headerUnderline};
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 40px;
  height: 100%;
`

const ReservationSettings = styled.div`
  display: grid;
  align-items: flex-start;
`

const FormButton = styled.div`
  align-self: flex-end;
`

const ModalText = styled.p`
  padding-bottom: 1.5rem;
`
const ModalTitle = styled.h4`
  padding-bottom: 1rem;
  margin: 0;
`

export {
  FormWrapper,
  FormHeader,
  Form,
  ReservationSettings,
  FormButton,
  ModalText,
  ModalTitle,
}
