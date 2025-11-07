import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Box, Button, Card, Typography } from '@mui/material'
import { CartTable } from '../components/cart/CartTable'
import { ShoppingCart } from '@mui/icons-material'
import { formatPrice } from '../../utils'

export const Cart = () => {
    const { cart } = useContext(CartContext)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const total = cart.reduce((sum, item) => (item.product.price * item.quantity) + sum, 0)
        setCartTotal(total)
    }, [cart])

    const showCart = () => {
        if (cart.length > 0) {
            return <CartTable />
        }
        return (
            <Box>
                <ShoppingCart sx={{
                    fontSize: 100
                }} />
                <Typography>Your cart is empty. Go add something to it.</Typography>
            </Box>
        )
    }

    const handleCheckout = () => {
        
    }

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
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: (cart.length > 0) ? 'start' : 'center'
                }}>
                    {showCart()}
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
                        pt: 1,
                        borderBottom: 1,
                        borderColor: 'gray'
                    }}>
                        <Typography variant='h5'>Total:</Typography>
                        <Typography variant='h5'>${formatPrice(cartTotal)}</Typography>
                    </Box>
                    <Button variant='contained' sx={{
                        m: 1,
                        backgroundColor: '#48ACF0',
                    }} disabled={(cart.length === 0)}>Proceed to Checkout</Button>
                </Card>
            </Box >
        </Box >
    )
}
