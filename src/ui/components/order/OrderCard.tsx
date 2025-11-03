import { Box, Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'
import { formatOrderId, formatPrice } from '../../../utils'

export const OrderCard = ({ id, cost, datetime, setCurrentOrderId }: { id: number, cost: number, datetime: Date, setCurrentOrderId: Function }) => {
    const newDate: Date = new Date(datetime.toString())
    return (
        <Card sx={{
            display: 'flex',
            width: '100%'
        }}>
            <CardActionArea sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
            }} onClick={() => {
                setCurrentOrderId(id)
            }}>
                <Box>
                    <Typography variant='h5'>
                        Order #{formatOrderId(id)}
                    </Typography>
                    <Typography variant='h6'>
                        {newDate.toDateString()}
                    </Typography>
                </Box>
                <Typography variant='h6'>
                    ${formatPrice(cost)}
                </Typography>
            </CardActionArea>
        </Card>
    )
}
