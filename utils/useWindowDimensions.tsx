import React, { useEffect, useState } from 'react'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    height: null,
    width: null
  })
  useEffect(() => {
    setWindowDimensions(getWindowDimensions())
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowDimensions
}

export default useWindowDimensions