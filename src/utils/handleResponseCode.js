//import getAzureLogoutUrl from './getAzureLogoutUrl'
import deleteToken from '../../src/shared/TokenStorage/deleteToken'

export default function redirectOnError(code) {
  const isInRange = (code > 199 && code <= 400) || code === 409 || code === 404
  if (!isInRange) {
    deleteToken()
    return (window.location.href = `http://localhost:3000/`)
  }
}
