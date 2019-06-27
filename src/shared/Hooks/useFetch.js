import { useState, useEffect } from 'react'
import { request } from '../../helpers/request'
export default function useFetch(url, method, payload) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchUrl() {
      try {
        const response = await request(url, method, payload)
        const json = await response.json()
        setData(json)
        setLoading(false)
      } catch (err) {
        setError(err)
      }
    }
    fetchUrl()
  }, [method, payload, url])

  return [error, data, loading]
}
