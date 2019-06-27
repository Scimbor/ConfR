const saveToken = token => {
  /* const hashParams = new URLSearchParams(document.location.hash.slice(1))
  localStorage.setItem('TOKEN', hashParams.get('access_token'))
  localStorage.setItem('TOKEN_ID', hashParams.get('id_token')) */

  localStorage.setItem('TOKEN', token)
}

export default saveToken
