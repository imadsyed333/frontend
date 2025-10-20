import React from 'react'
import { Box, Typography } from '@mui/material'

export const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Typography
                variant='h1'
            >
                Welcome
            </Typography>
            <Typography variant='h6'>
                We make crazy frozen samosas. And other stuff.
            </Typography>
        </Box>
    )
}
