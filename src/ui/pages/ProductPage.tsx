import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductWithId } from '../../actions/productActions'
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Product } from '../../constants'

export const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        getProductWithId(Number(id)).then(res => setProduct(res))
    }, [id])

    const PageContent = () => {
        if (product) {
            return (
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '85vh',
                    width: '100vw',
                    m: 5,
                }}>
                    <CardMedia component={'img'} image={product.image} alt={product.name} sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain'
                    }} />
                    <CardContent>
                        <Typography variant='h1'>
                            {product.name}
                        </Typography>
                        <Box>
                            <Typography>
                                ${product.price}
                            </Typography>
                            <Button>Add to Cart</Button>
                        </Box>
                        <Typography>
                            {product.description}
                        </Typography>
                    </CardContent>
                </Card>
            )
        }
        return (
            <>The requested product could not be found</>
        )
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <PageContent />
        </Box>
    )
}
