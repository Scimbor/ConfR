import styled, { css } from 'styled-components'
import { Colors } from '../Colors'

const {
  gray100: disabled,
  gray200: textDisabled,
  gray400: closeButton,
  gray600: closeButtontHover,
  gray600: closeButtonFocus,
  white: textDefault,
  blue100: active,
  blue200: focus,
  blue300: hover,
  blue400: backgroundDefault,
  lightGreenA400: backgroundLightGreen,
  lightGreenA700: backgroundLightGreenHover,
} = Colors

export const Button = styled.button`
  display: inline-block;
  padding: 0 1rem;
  height: 2.25rem;
  border: none;
  border-radius: 0.1875rem;
  background-color: ${props => (props.disabled ? disabled : backgroundDefault)};
  color: ${props => (props.disabled ? textDisabled : textDefault)};
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  box-shadow: ${props =>
    props.disabled ? 'none' : '0 0.125rem 0.125rem rgba(0, 0, 0, 0.19);'};
  transition: all 0.2s ease-in-out;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};

  &:hover {
    background-color: ${props => (props.disabled ? null : hover)};
    box-shadow: ${props =>
      props.disabled ? 'none' : '0 0.2rem 0.3125rem 0 rgba(0,0,0,0.19)'};
  }

  &:focus {
    background-color: ${props => (props.disabled ? null : focus)};
  }

  &:active {
    background-color: ${props => (props.disabled ? null : active)};
    box-shadow: ${props =>
      props.disabled ? 'none' : '0 0.3rem 0.3125rem 0 rgba(0,0,0,0.19)'};
  }

  ${props =>
    props.modalStyles &&
    css`
      width: 100%;
      padding: 25px 40px;
      font-size: 1.2rem;
      text-align: center;
      height: 100%;
      @media (max-width: 768px) {
        padding: 15px 30px;
      }
    `}

    ${props =>
      props.btnLogin &&
      css`
        width: 81%;
        height: 2.75rem;
        margin-top: 2.6rem;
      `}

    ${props =>
      props.greenBtn &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${backgroundLightGreen}
        &:hover{
          background-color: ${backgroundLightGreenHover};
          border-color: ${backgroundLightGreenHover};
        }
        &:focus {
          background-color: ${backgroundLightGreenHover};
          border-color: ${backgroundLightGreenHover};
        }
      `}

      ${props =>
        props.headerBtn &&
        css`
          @media (max-width: 600px) {
            font-size: 0.8rem;
            padding: 0 8px;
          }
        `}

    ${props =>
      props.switchBtn &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.4rem;
        width: 2.4rem;
        padding: 0;
        border-radius: 100%;
        margin-left: 10px;
        @media (min-width: 375px) {
          margin-left: 40px;
        }
      `}
  ${props =>
    props.switchBtnPrev &&
    props.switchBtn &&
    css`
      margin-right: 10px;
      margin-left: 0;
      @media (min-width: 375px) {
        margin-right: 40px;
        margin-left: 0;
      }
    `}
    ${props =>
      props.infoModal &&
      css`
        max-width: 80px;
        align-self: flex-end;
        margin-top: 15px;
      `}

      ${props =>
        props.confirmModalCancel &&
        css`
            margin-right: 1.2rem;
            background-color: ${closeButton};
            border-color: ${closeButton};
            &:hover{
              background-color: ${closeButtontHover};
              border-color: ${closeButtontHover};
            }
            &:focus {
              background-color: ${closeButtonFocus};
              border-color: ${closeButtonFocus};
            }
            }
          `}
      ${props =>
        props.confirmModalSave &&
        css`
          line-height: 2.4;
          margin: 0;
        `}

        ${props =>
          props.iconBtn &&
          css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.4rem;

            @media (max-width: 600px) {
              width: 100%;
            }
          `}
        ${props =>
          props.isFilterApplied &&
          css`
            position: relative;
            &:before {
              content: '';
              position: absolute;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              top: 20%;
              left: 70%;
              background-color: ${backgroundLightGreen};
            }
          `}

          ${props =>
            props.mobileFilterBtn &&
            css`
              @media (max-width: 768px) {
                width: 15rem;
                margin-bottom: 25px;
              }
            `}
`
