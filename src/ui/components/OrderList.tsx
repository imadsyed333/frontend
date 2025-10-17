import React, { useContext, useEffect, useState } from 'react'
import { Order } from '../../constants'
import { AuthContext } from '../../AuthContext'
import { getUserOrders } from '../../api/orderClient'
import { Box, List, ListItem } from '@mui/material'
import { OrderCard } from './OrderCard'

export const OrderList = ({ orders, setCurrentOrderId }: { orders: Order[], setCurrentOrderId: Function }) => {

    return (
        <Box>
            <List>
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
