import React, { useContext, useEffect, useState } from 'react'
import { getUserOrders } from '../../api/orderClient'
import { Box, Card } from '@mui/material'
import { Order } from '../../types'
import { ProfileCard } from '../components/ProfileCard'
import { AuthContext } from '../../context/AuthContext'
import { OrdersCard } from '../components/OrdersCard'
import { OrderInfoCard } from '../components/OrderInfoCard'

export const Profile = () => {
    const [orders, setOrders] = useState<Order[]>([])
    const [currentOrderId, setCurrentOrderId] = useState<number | undefined>(undefined)
    const [currentOrder, setCurrentOrder] = useState<Order | undefined>(undefined)
    const { user } = useContext(AuthContext)


    useEffect(() => {
        getUserOrders().then((res) => setOrders(res.orders)).catch((e) => console.log(e))
    }, [])

    useEffect(() => {
        if (currentOrderId) {
            const order = orders.find((order) => order.id === currentOrderId)
            setCurrentOrder(order)
        }
    }, [currentOrderId, orders])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '89vh',
            width: '100%',
            mt: '85px',
        }}>
            <ProfileCard name={user?.name || ''} email={user?.email || ''} />
            <Card sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                mx: 2,
            }}>
                <OrdersCard orders={orders} setCurrentOrderId={setCurrentOrderId} />
            </Card>
            <Box sx={{
                display: 'flex',
                height: '100%',
                width: '100%'
            }}>
                {
                    orders.length !== 0 &&
                    <OrderInfoCard order={currentOrder} />
                }
            </Box>
        </Box>
    )
}
