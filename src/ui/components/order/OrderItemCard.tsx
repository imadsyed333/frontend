import React from 'react'
import { OrderItem } from '../../../types'
import { Card, Typography } from '@mui/material'
import { formatPrice } from '../../../utils'

export const OrderItemCard = ({ orderItem }: { orderItem: OrderItem }) => {
    const { quantity, product, subtotal } = orderItem

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            p: 2
        }}>
            <Typography variant='h5'>{quantity}</Typography>
            <Typography variant='h5'>{product.price}</Typography>
            <Typography variant='h5'>${formatPrice(subtotal)}</Typography>
        </Card>
    )
}
