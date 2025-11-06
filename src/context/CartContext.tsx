import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { CartItem, DeleteItem, UpdateItem } from '../types'
import { AuthContext } from './AuthContext'
import { getAllCartItems, syncCart } from '../api/cartClient'
import { useLocation } from 'react-router'

var debounce = require('lodash/debounce')

type CartContextType = {
  cart: CartItem[],
  setCountAt: Function,
  deleteItemAt: Function,
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCountAt: (key: number, id: number, value: number) => { },
  deleteItemAt: (key: number, id: number) => { },
})

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<CartItem[]>([])
  const { user } = useContext(AuthContext)
  const [updateItems, setUpdateItems] = useState<UpdateItem[]>([])
  const [deleteItems, setDeleteItems] = useState<DeleteItem[]>([])
  const location = useLocation()

  useEffect(() => {
    if (user && location.pathname === '/cart') {
      getAllCartItems().then(res => setCart(res.cartItems)).catch(err => console.log(err)).finally(() => setLoading(false))
    }
  }, [user, location.pathname])

  useEffect(() => {
    if (!loading) debouncedSync(updateItems, deleteItems)
    return () => debouncedSync.cancel()
  }, [cart])

  const debouncedSync = debounce(async (updateItems: UpdateItem[], deleteItems: DeleteItem[]) => {
    syncCart(updateItems, deleteItems).catch(err => console.log(err))
  }, 800)

  const setCountAt = (key: number, id: number, value: number) => {
    const copyUpdateItems = [...updateItems]
    const index = updateItems.findIndex(item => item.id === id)

    if (index > -1) {
      copyUpdateItems[index].quantity = value
    } else {
      copyUpdateItems.push({
        id,
        quantity: value,
      })
    }
    setUpdateItems(copyUpdateItems)

    const copyCart: CartItem[] = [...cart]
    copyCart[key].quantity = value
    setCart(copyCart)
  }

  const deleteItemAt = (key: number, id: number,) => {
    const copyDeleteItems = [...deleteItems]
    const index = deleteItems.findIndex(item => item.id === id)

    if (index < 0) {
      copyDeleteItems.push({
        id
      })
    }
    setDeleteItems(copyDeleteItems)

    const copyCart: CartItem[] = [...cart]
    copyCart.splice(key, 1)
    setCart(copyCart)
  }

  const value = useMemo(() => ({ cart, setCountAt, deleteItemAt }), [cart])

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
