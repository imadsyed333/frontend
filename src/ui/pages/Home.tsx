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
                sx={{
                    fontFamily: 'serif'
                }}>
                Welcome
            </Typography>
            <Typography variant='h6'
                sx={{
                    fontFamily: 'serif',
                }}>
                We make crazy frozen samosas. And other stuff.
            </Typography>
        </Box>
    )
}
