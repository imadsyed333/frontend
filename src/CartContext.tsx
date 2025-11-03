import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Purchase } from './types'

type CartContextType = {
  cart: Purchase[],
  setCart: React.Dispatch<React.SetStateAction<Purchase[]>>
}

export const CartContext = createContext<CartContextType>({ cart: [], setCart: () => { } })

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<Purchase[]>([])
  const value = useMemo(() => ({ cart, setCart }), [cart])

  useEffect(() => {
    console.log('I am being called')
    const cartString = window.sessionStorage.getItem('cart') || '[]'
    const copyCart: Purchase[] = JSON.parse(cartString)
    setCart([...copyCart])
  }, [])

  useEffect(() => {
    const cartString = JSON.stringify(cart)
    window.sessionStorage.setItem('cart', cartString)
  }, [cart])

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
