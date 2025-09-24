import React from 'react'
import { Purchase } from '../../constants'
import { Card, CardActionArea, Typography } from '@mui/material'
import { IncrementalButton } from './IncrementalButton'

export const PurchaseCard = ({ purchase }: { purchase: Purchase }) => {
    const { product_name, product_price, count } = purchase
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            m: 2
        }}>
            <CardActionArea sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 2
            }}>
                <Typography variant='h4'>{product_name}</Typography>
            </CardActionArea>
            <Typography variant='h4'>${product_price}</Typography>
            <IncrementalButton count={count} setCount={() => { }} />
            <Typography variant='h4'>${product_price * count}</Typography>
        </Card>
    )
}
