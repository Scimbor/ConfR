import styled, { css } from 'styled-components'

const InputField = styled.div`
  position: relative;
  width: 18.75rem;

  ${props =>
    props.inputLogin &&
    css`
      margin-bottom: 1rem;
      border-bottom: 3px solid #036aafeb;
    `}
`

const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 0.75rem;
  padding-left: 0;
  font-size: 1.125rem;
  color: #000;
  transition: all 0.2s ease-in-out;

  ${props =>
    props.empty &&
    css`
      top: -0.75rem;
      opacity: 0.6;
      font-size: 0.75rem;
    `}
`

const TextInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem 0.75rem 0.75rem 0;
  font-size: 1rem;
  border: none;
  border-radius: 5px 5px 0px 0px;
  margin-top: 4px;
  :focus {
    outline: none;
  }

  :focus ~ ${InputLabel} {
    top: -1rem;
    opacity: 0.6;
    font-size: 0.75rem;
  }
`
export { InputField, InputLabel, TextInput }
