import styled from 'styled-components'

const DateSelectorWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 2fr 0.5fr;
  grid-column-gap: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
`

const FormSpan = styled.span`
  width: 30px;
  text-align: start;
  margin-right: 10px;
`

export { DateSelectorWrapper, FormSpan }
