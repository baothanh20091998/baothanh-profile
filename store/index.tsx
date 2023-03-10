import React, { createContext } from "react";

const StoreContext = createContext({})

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{}}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider