import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../../constants'
import { useNavigate } from 'react-router'

export const ProductCard = ({ product }: { product: Product }) => {
    const { id, name, image, description } = product
    const navigate = useNavigate()
    return (
        <Card sx={{
            width: '345px',
            margin: '2px'
        }}>
            <CardActionArea onClick={() => navigate(`/menu/${id}`)}>
                <CardMedia component={'img'} image={image}
                    alt='samosas' sx={{
                        width: '345px',
                        height: '200px'
                    }} />
                <CardContent>
                    <Typography variant='h4'>
                        {name}
                    </Typography>
                    <Typography variant='body1'>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
