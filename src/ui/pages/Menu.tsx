import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/productClient'
import { ProductCard } from '../components/ProductCard'
import { Product } from '../../constants'

export const Menu = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.products)
        }).catch((e) => console.log(e))
    }, [])
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
