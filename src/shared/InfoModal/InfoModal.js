import React from 'react'
import { Modal, ModalContent, ModalWrapper } from './InfoModal.style'

function InfoModal(props) {
  return (
    <ModalWrapper open={props.open}>
      <Modal>
        <ModalContent>{props.children}</ModalContent>
      </Modal>
    </ModalWrapper>
  )
}

export default InfoModal
