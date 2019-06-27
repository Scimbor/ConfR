export default function getAzureLogoutUrl() {
  const AZURE_AUTHORIZATION_URL = `https://login.microsoftonline.com/common/oauth2/logout`
  const DEFAULT_SUCCESS_REDIRECT = `${window.location.protocol}//${
    window.location.host
  }/logout`
  //return `${AZURE_AUTHORIZATION_URL}?${`post_logout_redirect_uri=${DEFAULT_SUCCESS_REDIRECT}`}`
  return `${window.location.protocol}//${window.location.host}/logout`
}
