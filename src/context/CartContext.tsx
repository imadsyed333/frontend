import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { CartItem, DeleteItem, UpdateItem } from '../types'
import { AuthContext } from './AuthContext'
import { getAllCartItems } from '../api/cartClient'

type CartContextType = {
  cart: CartItem[],
  // updateItems: UpdateItem[],
  // deleteItems: DeleteItem[],
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  // updateItems: [],
  // deleteItems: [],
  setCart: () => { }
})

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const { user } = useContext(AuthContext)
  const [updateItems, setUpdateItems] = useState<UpdateItem[]>([])
  const [deleteItems, setDeleteItems] = useState<DeleteItem[]>([])

  const value = useMemo(() => ({ cart, setCart }), [cart])

  // Fetch cart from db once user has logged in for the first time
  useEffect(() => {
    if (user) {
      getAllCartItems().then(res => {
        setCart(res.cartItems)
      }).catch(err => console.log(err))
    }
  }, [user])

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
