import { Box, CardActionArea, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../hooks/useAuth'

export const AccountLinks = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <CardActionArea sx={{
                display: 'flex',
                m: 1,
                p: 1,
            }} onClick={() => {
                navigate('/cart')
            }}>
                <Typography variant='h6'
                    sx={{
                        fontFamily: 'serif',
                        fontWeight: 200,
                    }}>
                    My Cart
                </Typography>
            </CardActionArea>
            <CardActionArea sx={{
                display: 'flex',
                m: 1,
                p: 1,
            }}>
                <Typography variant='h6' noWrap
                    sx={{
                        fontFamily: 'serif',
                        fontWeight: 200,
                        width: 'fit-content',
                    }}>
                    Hi, {user?.name}!
                </Typography>
            </CardActionArea>
        </Box>
    )
}
