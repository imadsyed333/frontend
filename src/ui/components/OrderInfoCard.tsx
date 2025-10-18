import { Box, Card, List, ListItem } from '@mui/material'
import React from 'react'
import { Order } from '../../constants'
import { OrderItemCard } from './OrderItemCard'

export const OrderInfoCard = ({ order }: { order: Order | undefined }) => {

    const OrderItems = () => {
        return !order ? (
            <div>Select an order to view its info</div>
        ) :
            (
                <Box>
                    <List>
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
