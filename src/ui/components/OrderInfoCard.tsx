import { Box, Card, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Order } from '../../constants'
import { OrderItemCard } from './OrderItemCard'
import { formatOrderId } from '../../utils'

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
                    width: '100%'
                }}>
                    <Typography variant='h2'>Order #{formatOrderId(order.id)}</Typography>
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
