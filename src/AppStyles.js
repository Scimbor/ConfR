import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  a{
    text-decoration: none;
  }

  .App {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  h1, .alpha{
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 2.75rem;
  }

  h2, .beta{
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 2.25rem;
  }

  h3, .gamma{
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  h4, .delta{
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  h5, .epsilon{
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  h6, .zeta{
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  p{
    font-size: 1rem;
    line-height: 1.5;
  }

  article {
    width: 60%;
    margin: 0 20%;
    a {
        color: red;
        &:hover { color: blue; }
    }
  }

  form { text-align: center; }

  label {
      display:block;
      margin: 10px 0;
  }

.no-scroll {
  overflow: hidden;
}

.datePicker {
  @media (max-width: 470px){
    left: 23%;
  }
  @media (max-width: 360px){
    left: 21%;
  }
  @media (max-width: 320px){
    left: 13%;
  }
}
`
