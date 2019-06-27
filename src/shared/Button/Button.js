import React from 'react'
import { Button } from './Button.style'

const ButtonComponent = props => {
  return (
    <Button disabled={props.disabled} {...props}>
      {props.children}
    </Button>
  )
}

export default ButtonComponent
