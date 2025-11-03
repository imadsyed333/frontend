import React from 'react'
import { Purchase } from '../../types'
import { Card, Typography } from '@mui/material'
import { formatPrice } from '../../utils'

export const PurchaseCard = ({ purchase }: { purchase: Purchase }) => {
    const { product_count, product_name, product_price } = purchase

    const total_price = product_count * product_price
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            p: 2
        }}>
            <Typography variant='h5'>{product_count}</Typography>
            <Typography variant='h5'>{product_name}</Typography>
            <Typography variant='h5'>${formatPrice(total_price)}</Typography>
        </Card>
    )
}
