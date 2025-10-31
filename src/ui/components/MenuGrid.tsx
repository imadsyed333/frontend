import { Grid, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Product } from '../../types'
import { getAllProducts } from '../../api/productClient'
import { ProductCard } from './ProductCard'

export const MenuGrid = React.memo(() => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.products)
        }).catch((e) => console.log(e))
    }, [])

    return (
        <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
            height: '100%',
            width: '100%'
        }}>
            {products.map((product, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 3 }}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
})
