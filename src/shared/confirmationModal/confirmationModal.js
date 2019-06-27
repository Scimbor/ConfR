import React from 'react'
import { useEffect } from 'react'
import {
  ConfModal,
  CloseIcon,
  Controls,
  ModalBackground,
} from './confirmationModal.style'
import FocusLock from 'react-focus-lock'
import ButtonComponent from '../Button/Button'
import { FormattedMessage } from 'react-intl'

const ConfirmationModal = ({
  open,
  closeHandler,
  children,
  cancel,
  save,
  onConfirmHandler,
}) => {
  useEffect(() => {
    function handleEscKeyDown(e) {
      return e.keyCode === 27 && closeHandler()
    }
    document.addEventListener('keydown', handleEscKeyDown)
    return () => document.removeEventListener('keydown', handleEscKeyDown)
  }, [closeHandler])

  return (
    <ModalBackground open={open}>
      <ConfModal>
        <FocusLock returnFocus disabled={!open} autoFocus={false}>
          <FormattedMessage id={'close'}>
            {txt => <CloseIcon aria-label={txt} onClick={closeHandler} />}
          </FormattedMessage>
          {children}
          <Controls>
            {cancel && (
              <FormattedMessage id={cancel}>
                {txt => (
                  <ButtonComponent confirmModalCancel onClick={closeHandler}>
                    {txt}
                  </ButtonComponent>
                )}
              </FormattedMessage>
            )}
            <FormattedMessage id={save}>
              {txt => (
                <ButtonComponent confirmModalSave onClick={onConfirmHandler}>
                  {txt}
                </ButtonComponent>
              )}
            </FormattedMessage>
          </Controls>
        </FocusLock>
      </ConfModal>
    </ModalBackground>
  )
}

export default ConfirmationModal
