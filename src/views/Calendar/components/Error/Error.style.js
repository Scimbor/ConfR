import styled from 'styled-components'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`
const ErrorMessage = styled.span`
  padding-left: 15px;
  max-width: 80%;
`

const MessageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
`

export { ErrorMessage, ErrorWrapper, MessageWrapper }
