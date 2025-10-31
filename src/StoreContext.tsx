import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Purchase } from './types'

type StoreContextType = {
  cart: Purchase[],
  setCart: React.Dispatch<React.SetStateAction<Purchase[]>>
}

export const StoreContext = createContext<StoreContextType>({ cart: [], setCart: () => { } })

export const StoreProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<Purchase[]>([])
  const value = useMemo(() => ({ cart, setCart }), [cart])

  useEffect(() => {
    console.log('I am being called')
    const cartString = window.sessionStorage.getItem('cart') || '[]'
    const copyCart: Purchase[] = JSON.parse(cartString)
    setCart([...copyCart])
  }, [])
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  )
}
