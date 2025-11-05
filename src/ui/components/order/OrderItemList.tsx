import React from 'react'
import { Order, OrderItem } from '../../../types'
import { FadeWrapper } from '../FadeWrapper'
import { OrderCard } from './OrderCard'
import { ListItem } from '@mui/material'
import { OrderItemCard } from './OrderItemCard'

export const PurchaseList = ({ orderItems }: { orderItems: OrderItem[] }) => {
    return (
        <FadeWrapper>
            <div>
                {
                    orderItems.map((orderItem) => (
                        <ListItem>
                            <OrderItemCard orderItem={orderItem} />
                        </ListItem>
                    ))
                }
            </div>
        </FadeWrapper>
    )
}
