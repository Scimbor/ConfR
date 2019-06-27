import React, { useState, useEffect } from 'react'
import ButtonComponent from '../../../../shared//Button/Button.js'
import {
  Header,
  HeaderLogo,
  ButtonsWrapper,
  ModalText,
  ModalTitle,
  ButtonText,
} from './Header.style.js'
import Modal from '../Modal/Modal.js'
import { FormattedMessage } from 'react-intl'
import ConfirmationModal from '../../../../../src/shared/confirmationModal/confirmationModal'
import { FilterList, Settings, Add } from '@material-ui/icons'
import getAzureLogoutUrl from '../../../../utils/getAzureLogoutUrl'

function CalendarHeader(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [logoutModal, setLogoutModal] = useState(false)

  function openModal() {
    if (!props.loading) {
      setIsOpen(true)
      document.body.classList.add('no-scroll')
    }
  }

  function closeModal() {
    setIsOpen(false)
    document.body.classList.remove('no-scroll')
    document.removeEventListener('keydown', exitModal)
  }

  function exitModal(e) {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  function openLogoutModal() {
    if (isOpen) {
      setLogoutModal(true)
      document.removeEventListener('keydown', exitModal)
    }
  }

  function closeLogoutModal() {
    setLogoutModal(false)
  }

  function redirectToLogout() {
    window.location = getAzureLogoutUrl()
  }

  useEffect(() => {
    if (isOpen && !logoutModal) {
      document.addEventListener('keydown', exitModal)
    }
  })

  return (
    <Header isFormOpen={props.isFormOpen}>
      <HeaderLogo src="confr-logo-small.png" alt="confr logo" />
      <ButtonsWrapper>
        <FormattedMessage id={'newBooking'}>
          {txt => (
            <ButtonComponent
              greenBtn
              headerBtn
              onClick={() => {
                if (!props.loading) {
                  props.openReservationForm(true)
                  props.handleOpenDatePicker(false)
                }
              }}>
              {<Add />}
              <ButtonText>{txt}</ButtonText>
            </ButtonComponent>
          )}
        </FormattedMessage>
        <ButtonComponent
          headerBtn
          iconBtn
          onClick={() => props.toggleFilter()}
          isFilterApplied={props.isFilterApplied}>
          <FilterList />
        </ButtonComponent>
        <FormattedMessage id={'options'}>
          {txt => (
            <ButtonComponent headerBtn iconBtn onClick={openModal}>
              <Settings />
            </ButtonComponent>
          )}
        </FormattedMessage>
      </ButtonsWrapper>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <FormattedMessage id={'logout'}>
          {txt => (
            <ButtonComponent modalStyles onClick={openLogoutModal}>
              {txt}
            </ButtonComponent>
          )}
        </FormattedMessage>
        <ConfirmationModal
          open={logoutModal}
          closeHandler={closeLogoutModal}
          cancel="cancel"
          save="logout"
          onConfirmHandler={redirectToLogout}>
          <FormattedMessage id={'logout'}>
            {txt => <ModalTitle>{txt}</ModalTitle>}
          </FormattedMessage>
          <FormattedMessage id={'logoutQuestion'}>
            {txt => <ModalText>{txt}</ModalText>}
          </FormattedMessage>
        </ConfirmationModal>
      </Modal>
    </Header>
  )
}

export default CalendarHeader
