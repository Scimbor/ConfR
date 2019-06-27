/*export default function getAzureRedirectionUrl() {
  const AZURE_AUTHORIZATION_URL = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize`
  const DEFAULT_SUCCESS_REDIRECT = `${window.location.protocol}//${
    window.location.host
  }/login/success`

  const redirectUri = `redirect_uri=${DEFAULT_SUCCESS_REDIRECT}`
  const clientID = `client_id=${process.env.REACT_APP_CLIENT_ID}`
  const objectID = `nonce=${process.env.REACT_APP_OBJECT_ID}`
  const responseType = `response_type=${process.env.REACT_APP_RESPONSE_TYPE}`
  const responseMode = `response_mode=${process.env.REACT_APP_RESPONSE_MODE}`

  return `${AZURE_AUTHORIZATION_URL}?${clientID}&${objectID}&${responseType}&${responseMode}&${redirectUri}&scope=openid`
} - version for Azure Authentication */

import { request } from '../helpers/request'
import loginSuccess from '../views/Login/login.success'

const LogIn = async (url, method, payload) => {
  const response = await request(url, method, payload)
  const login = await response.json()

  if (login.token) {
    loginSuccess(login.token)
  }
}

export default LogIn
