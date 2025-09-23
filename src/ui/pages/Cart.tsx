import React, { useContext, useState } from 'react'
import { Product } from '../../constants'
import { StoreContext } from '../../StoreContext'

export const Cart = () => {
    const { cart, setCart } = useContext(StoreContext)

    return (
        <div>{cart.toString()}</div>
    )
}
