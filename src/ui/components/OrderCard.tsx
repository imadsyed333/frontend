import { Box, Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'

export const OrderCard = ({ id, cost, datetime, setCurrentOrderId }: { id: number, cost: number, datetime: Date, setCurrentOrderId: Function }) => {
    const newDate: Date = new Date(datetime.toString())
    return (
        <Card>
            <CardActionArea sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} onClick={() => {
                setCurrentOrderId(id)
            }}>
                <Box>
                    <Typography variant='h5'>
                        Order #{id}
                    </Typography>
                    <Typography variant='h6'>
                        {newDate.toDateString()}
                    </Typography>
                </Box>
                <Typography variant='h6'>
                    ${cost}
                </Typography>
            </CardActionArea>
        </Card>
    )
}
