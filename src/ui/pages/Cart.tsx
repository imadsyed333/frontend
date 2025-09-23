import React, { useContext } from 'react'
import { StoreContext } from '../../StoreContext'
import { Box, Typography } from '@mui/material'

export const Cart = () => {
    const { cart, setCart } = useContext(StoreContext)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Typography>
                {cart.length}
            </Typography>
        </Box>
    )
}
