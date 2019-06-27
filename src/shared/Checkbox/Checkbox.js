import React from 'react'
import { Done } from '@material-ui/icons'
import {
  StyledCheckbox,
  CheckBoxLabel,
  CheckBoxSpan,
  CheckBoxText,
  CheckBoxWrapper,
} from './Checkbox.style'

const CheckboxComponent = props => {
  return (
    <CheckBoxWrapper onClick={() => props.setChecked(!props.checked)}>
      <CheckBoxLabel>
        <StyledCheckbox type="checkbox" checked={props.checked} />
        <CheckBoxSpan checked={props.checked}>
          <Done />
        </CheckBoxSpan>
      </CheckBoxLabel>
      <CheckBoxText>{props.text}</CheckBoxText>
    </CheckBoxWrapper>
  )
}

export default CheckboxComponent
