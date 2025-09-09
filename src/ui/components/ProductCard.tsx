import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { imageLink, Product } from '../../constants'
import { useNavigate } from 'react-router'

export const ProductCard = ({ product }: { product: Product }) => {
    const { id, name, price } = product
    const navigate = useNavigate()
    return (
        <Card sx={{
            width: '345px',
            margin: '2px'
        }}>
            <CardActionArea onClick={() => navigate(`/menu/${id}`)}>
                <CardMedia component={'img'} image={imageLink}
                    alt='samosas' />
                <CardContent>
                    <Typography variant='h4'>
                        {name}
                    </Typography>
                    <Typography variant='body1'>
                        ${price} / item
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
