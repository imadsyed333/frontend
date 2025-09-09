import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { getProducts } from '../../actions'
import { ProductCard } from '../components/ProductCard'

export const Menu = () => {
    let products = getProducts()
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Typography variant='h1'
                sx={{
                    fontFamily: 'serif'
                }}>
                Menu
            </Typography>
            <Typography variant='h5'
                sx={{
                    fontFamily: 'serif'
                }}>
                Order something. Anything.
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                {products.map((product) => {
                    return (
                        <ProductCard product={product} key={product.id} />
                    )
                })}
            </Box>
        </Container>
    )
}
