import { useState, useEffect } from 'react'

export function useCardsPerView() {
  const getCount = () => window.innerWidth <= 576 ? 1 : window.innerWidth <= 992 ? 2 : 3
  const [count, setCount] = useState(getCount)
  useEffect(() => {
    const handleResize = () => setCount(getCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return count
}
