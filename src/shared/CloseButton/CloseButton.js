import React from 'react'
import { IconWrapper, closeIconStyles } from './CloseButton.style'
import CloseIcon from '../Icons/CloseIcon'

function CloseButton(props) {
  return (
    <IconWrapper onClick={props.toggleForm} {...props}>
      <CloseIcon style={closeIconStyles} width={32} height={32} />
    </IconWrapper>
  )
}

export default CloseButton
