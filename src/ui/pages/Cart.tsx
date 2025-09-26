import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../StoreContext'
import { Box, Button, Card, Typography } from '@mui/material'
import { CartTable } from '../components/CartTable'

export const Cart = () => {
    const [cartTotal, setCartTotal] = useState(0)
    const { cart } = useContext(StoreContext)

    useEffect(() => {
        let sum = 0
        cart.forEach(purchase => {
            sum += (purchase.count * purchase.product_price)
        })
        setCartTotal(sum)
    }, [cart])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '89vh',
            mt: '85px',
            mx: 2
        }}>
            <Box sx={{
                display: 'flex',
                flex: 2,
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'right',
                alignItems: 'center',
            }}>
                <Card sx={{
                    height: '100%',
                    width: '100%',
                }}>
                    <CartTable />
                </Card>

            </Box>
            <Box sx={{
                display: 'flex',
                flex: 1,
                height: '100%',
                width: '100%',
                ml: 1,
            }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: '100%'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        m: 1,
                        pb: 2,
                        borderBottom: 1,
                        borderColor: 'gray'
                    }}>
                        <Typography variant='h5'>Total:</Typography>
                        <Typography variant='h5'>${cartTotal}</Typography>
                    </Box>
                    <Button variant='contained' sx={{
                        m: 1,
                    }}>Proceed to Checkout</Button>
                </Card>
            </Box >
        </Box >
    )
}
