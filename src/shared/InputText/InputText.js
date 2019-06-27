import React from 'react'
import { InputField, TextInput, InputLabel } from './InputText.style'

const InputText = props => {
  return (
    <InputField inputLogin>
      <TextInput {...props} />
      <InputLabel htmlFor={props.id} empty={props.value ? true : null}>
        {props.label ? props.label : 'Label'}
      </InputLabel>
    </InputField>
  )
}

export default InputText
