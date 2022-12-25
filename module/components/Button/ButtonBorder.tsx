import React from 'react'

export default function ButtonBorder({ children, onPress }) {
  return (
    <button
      className={"cursor-pointer w-full text-lg rounded-full px-2 py-3 hover:text-white hover:bg-gradient-to-l bg-gradient-to-r transition-all text-white"}
      onClick={onPress}
    >
      {children}
    </button>
  )
}
