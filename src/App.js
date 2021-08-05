import React, { useState } from 'react'
import GlobalStyle from './themes/globalStyle'
import { Router } from './router/router'

export const GlobalContext = React.createContext()

export default function App() {
  const [cart, setCart] = useState([])

  const context = {
    cart,
    setCart
  }

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle />
      <Router />
    </GlobalContext.Provider>
  )
}
