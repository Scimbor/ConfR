import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { StyledHome, Form } from './style'
import isAuthorized from '../../utils/isAuthorized'
import { FormattedMessage } from 'react-intl'
import InputText from '../../shared/InputText/InputText'
import ButtonComponent from '../../shared/Button/Button'
import LogIn from '../../utils/getAzureAuthorizationUrl'

const Login = props => {
  const [email, setEmail] = useState('user@gmail.com')
  const [password, setPassword] = useState('12345')

  return isAuthorized() ? (
    <Route render={() => <Redirect to={{ pathname: '/calendar' }} />} />
  ) : (
    <StyledHome>
      <img src="confr-logo.jpg" alt="Welcome to ConfR" />
      <FormattedMessage id={'welcome'} values={{ name: 'Conf' }}>
        {txt => (
          <h1>
            {txt}
            <span>R</span>
          </h1>
        )}
      </FormattedMessage>
      <Form>
        <InputText
          type={'email'}
          label={'E-mail'}
          value={email}
          onChange={e => setEmail(e.target.value)}
          inputLogin
          required
        />
        <InputText
          type={'password'}
          label={'Password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          inputLogin
          required
        />
        <FormattedMessage id={'signIn'}>
          {txt => (
            <ButtonComponent
              btnLogin
              onClick={() => {
                LogIn('http://127.0.0.1:3001/login', 'POST', {
                  email,
                  password,
                })
              }}>
              {txt}
            </ButtonComponent>
          )}
        </FormattedMessage>
      </Form>
    </StyledHome>
  )
}
export default Login
