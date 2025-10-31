import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/productClient'
import { Product } from '../../types'
import { MenuGrid } from '../components/MenuGrid'

export const Menu = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '89vh',
            mt: '85px',
            mx: 2,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                height: '100%',
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    width: '75%',
                    p: 1,
                }}>
                    <Typography variant='h1'>Menu</Typography>
                    <Typography variant='body1'>We have a variety of products, from samosas to kababs. We make all of our products with tender love and care. We hope you enjoy eating them as much as we enjoy making them.</Typography>
                </Box>
                <Card sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    height: '100%',
                    width: '75%',
                    p: 1,
                    mt: 2
                }}>
                    <MenuGrid />
                </Card>
            </Box>
        </Box>
    )
}
