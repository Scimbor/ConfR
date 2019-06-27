import { useState, useEffect, useRef } from 'react'

export default function useClickOutside(initialIsActive) {
  const [isComponentActive, setIsComponentActive] = useState(initialIsActive)
  const ref = useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return { ref, isComponentActive, setIsComponentActive }
}
