import styled, { css } from 'styled-components'
import { Colors } from '../Colors'

const { gray700: borderCheckbox, black: defaultColorText } = Colors

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const CheckBoxLabel = styled.label`
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 15px;
`

const CheckBoxSpan = styled.span`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  opacity: 0;
  z-index: -1;
  transition: all 0.2s;

  ${props =>
    props.checked &&
    css`
      opacity: 1;
    `}
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: none;
  border-radius: 3px;
  border: 2px solid ${borderCheckbox};
  transition: all 150ms;
`

const CheckBoxText = styled.p`
  display: block;
  color: ${defaultColorText};
`

export {
  StyledCheckbox,
  CheckBoxLabel,
  CheckBoxSpan,
  CheckBoxText,
  CheckBoxWrapper,
}
