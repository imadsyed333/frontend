import { Order } from '../../types'
import { Box, List, ListItem, Typography } from '@mui/material'
import { OrderCard } from './OrderCard'
export const OrderList = ({ orders, setCurrentOrderId }: { orders: Order[], setCurrentOrderId: Function }) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
            height: '100%',
            width: '100%'
        }}>
            <Typography variant='h2'>My Orders</Typography>
            <List sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                overflowY: 'scroll',
            }}>
                {
                    orders.map((order) => (
                        <ListItem>
                            <OrderCard id={order.id} datetime={order.datetime} cost={order.cost} setCurrentOrderId={setCurrentOrderId} />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}
