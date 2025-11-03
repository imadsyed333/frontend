import React from 'react'
import { Order, Purchase } from '../../types'
import { FadeWrapper } from './FadeWrapper'
import { OrderCard } from './OrderCard'
import { ListItem } from '@mui/material'
import { PurchaseCard } from './PurchaseCard'

export const PurchaseList = ({ purchases }: { purchases: Purchase[] }) => {
    return (
        <FadeWrapper>
            <div>
                {
                    purchases.map((purchase) => (
                        <ListItem>
                            <PurchaseCard purchase={purchase} />
                        </ListItem>
                    ))
                }
            </div>
        </FadeWrapper>
    )
}
