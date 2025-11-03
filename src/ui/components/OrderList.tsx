import { Order } from '../../types'
import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material'
import { OrderCard } from './OrderCard'
import { useEffect, useState } from 'react'
export const OrderList = ({ orders, setCurrentOrderId }: { orders: Order[], setCurrentOrderId: Function }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (orders) {
            setLoading(false)
        }
    }, [orders])
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
            height: '100%',
            width: '100%'
        }}>
            <Typography variant='h2' sx={{
                ml: 2,
            }}>My Orders</Typography>
            <List sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                overflowY: 'scroll',
            }}>
                {
                    orders.length !== 0 ? orders.map((order) => (
                        <ListItem>
                            <OrderCard id={order.id} datetime={order.datetime} cost={order.cost} setCurrentOrderId={setCurrentOrderId} />
                        </ListItem>
                    )) : (
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                        }}>
                            {
                                loading ? <CircularProgress /> : <Typography variant='h4'>No orders found.</Typography>
                            }
                        </Box>
                    )
                }
            </List>
        </Box>
    )
}
