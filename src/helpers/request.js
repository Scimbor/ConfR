import redirectOnError from '../utils/handleResponseCode'

export const request = async (url, method, payload) => {
  const getRequest = () => {
    const headers = {
      /* Authorization: `Bearer ${localStorage.getItem('TOKEN_ID')}`,
      Access_token: `${localStorage.getItem('TOKEN')}`, Azure - version */
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    }
    const content = {
      'Content-Type': `application/json`,
    }
    switch (method) {
      case 'GET':
        return { method, headers }

      case 'DELETE':
        return { method, headers }

      case 'POST':
        Object.assign(headers, content)
        return { method, headers, body: JSON.stringify(payload) }

      default:
        return { method, headers }
    }
  }

  const response = await fetch(url, getRequest())
  console.log(`Kod odpowiedzi z serwera: ${response.status}`)
  redirectOnError(response.status)
  return response
}
