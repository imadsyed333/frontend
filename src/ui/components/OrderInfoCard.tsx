import { Box, Card, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Order } from '../../constants'
import { OrderItemCard } from './OrderItemCard'
import { formatOrderId, formatPrice } from '../../utils'

export const OrderInfoCard = ({ order }: { order: Order | undefined }) => {

    const OrderItems = () => {
        return !order ? (
            <div>Select an order to view its info</div>
        ) :
            (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    height: '100%',
                    width: '100%',
                    m: 1,
                }}>
                    <Typography variant='h2' sx={{
                        mx: 1.5,
                    }}>Order #{formatOrderId(order.id)}</Typography>
                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%'
                    }}>
                        {
                            order.purchases.map((item) => (
                                <ListItem>
                                    <OrderItemCard item={item} />
                                </ListItem>
                            ))
                        }
                    </List>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        mb: 1,
                        borderTop: 1,
                        borderColor: 'gray'
                    }}>
                        <Typography sx={{
                            mx: 1.5,
                        }} variant='h4'>Total:</Typography>
                        <Typography sx={{
                            mx: 1.5
                        }} variant='h4'>${formatPrice(order.cost)}</Typography>
                    </Box>
                </Box>
            )
    }
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            mx: 2,
        }}>
            <OrderItems />
        </Card>
    )
}
