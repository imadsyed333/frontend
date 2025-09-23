import React, { createContext, useMemo, useState } from 'react'
import { Purchase } from './constants'

type StoreContextType = {
  cart: Purchase[],
  setCart: React.Dispatch<React.SetStateAction<Purchase[]>>
}

export const StoreContext = createContext<StoreContextType>({ cart: [], setCart: () => { } })

export const StoreProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<Purchase[]>([])
  const value = useMemo(() => ({ cart, setCart }), [cart])
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  )
}
