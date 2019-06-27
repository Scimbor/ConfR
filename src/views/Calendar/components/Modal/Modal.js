import React from 'react'
import uuid from 'uuid/v4'
import {
  OptionsList,
  ListItem,
  ModalHeader,
  Exit,
  ModalWrapper,
} from './Modal.style.js'
import FocusLock from 'react-focus-lock'
import ButtonComponent from './../../../../shared/Button/Button'
import { FormattedMessage } from 'react-intl'

function Modal(props) {
  const listItems = React.Children.toArray(props.children)

  return (
    <ModalWrapper isOpen={props.isOpen}>
      <FormattedMessage id={'options'}>
        {txt => <ModalHeader>{txt}</ModalHeader>}
      </FormattedMessage>
      <FocusLock returnFocus disabled={!props.isOpen} autoFocus={false}>
        <OptionsList>
          {listItems.map(item => (
            <ListItem key={uuid()}>{item}</ListItem>
          ))}
          <ListItem key={uuid()}>
            <FormattedMessage id={'closeMenu'}>
              {txt => (
                <ButtonComponent modalStyles onClick={props.closeModal}>
                  {txt}
                </ButtonComponent>
              )}
            </FormattedMessage>
          </ListItem>
        </OptionsList>
        <Exit onClick={props.closeModal} />
      </FocusLock>
    </ModalWrapper>
  )
}

export default Modal
