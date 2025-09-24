import React, { useContext } from 'react'
import { StoreContext } from '../../StoreContext'
import { Box, Typography } from '@mui/material'
import { PurchaseCard } from '../components/PurchaseCard'

export const Cart = () => {
    const { cart, setCart } = useContext(StoreContext)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            border: 1,
            borderColor: 'black',
            m: 2
        }}>
            {cart.map((purchase) =>
                <PurchaseCard key={purchase.product_id} purchase={purchase} />
            )}
        </Box>
    )
}
