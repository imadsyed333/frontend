import React from 'react'
import { FadeWrapper } from '../FadeWrapper'
import { OrderCard } from './OrderCard'
import { ListItem } from '@mui/material'
import { Order } from '../../../types'

export const OrderList = ({ orders, setCurrentOrderId }: { orders: Order[], setCurrentOrderId: Function }) => {
    return (
        <FadeWrapper>
            <div>
                {
                    orders.map((order) => (
                        <ListItem>
                            <OrderCard id={order.id} datetime={order.datetime} cost={order.cost} setCurrentOrderId={setCurrentOrderId} />
                        </ListItem>
                    ))
                }
            </div>
        </FadeWrapper>
    )
}
