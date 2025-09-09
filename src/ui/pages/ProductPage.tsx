import React from 'react'
import { useParams } from 'react-router'
import { getProductWithId } from '../../actions'
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { imageLink } from '../../constants'

export const ProductPage = () => {
    const { id } = useParams()
    const product = getProductWithId(Number(id))

    const PageContent = () => {
        if (product) {
            return (
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2
                }}>
                    <CardMedia component={'img'} image={imageLink} alt={product.name} />
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
