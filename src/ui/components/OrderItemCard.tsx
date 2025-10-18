import React from 'react'
import { Purchase } from '../../constants'
import { Card, Typography } from '@mui/material'

export const OrderItemCard = ({ item }: { item: Purchase }) => {
    const { product_count, product_name, product_price } = item

    const total_price = product_count * product_price
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Typography>{product_count}</Typography>
            <Typography>{product_name}</Typography>
            <Typography>${total_price}</Typography>
        </Card>
    )
}
