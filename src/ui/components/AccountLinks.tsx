import { Box, CardActionArea, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../AuthContext'
import { AccountMenu } from './AccountMenu'


export const AccountLinks = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            m: 1,
        }}>
            <CardActionArea sx={{
                display: 'flex',
                m: 1,
                p: 1,
            }} onClick={() => {
                navigate('/cart')
            }}>
                <Typography variant='h6'>
                    My Cart
                </Typography>
            </CardActionArea>
            <AccountMenu />
        </Box>
    )
}
