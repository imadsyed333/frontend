import { AccountCircle } from '@mui/icons-material'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export const ProfileCard = ({ name, email }: { name: string, email: string }) => {
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            mx: 2,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                border: 1,
                borderColor: 'lightgrey',
                p: 2,
                borderRadius: 2,
            }}>
                <AccountCircle sx={{
                    fontSize: 100
                }} />
                <Box>
                    <Typography>{name}</Typography>
                    <Typography>{email}</Typography>
                </Box>
            </Box>
        </Card>
    )
}
