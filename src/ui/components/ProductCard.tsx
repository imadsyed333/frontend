import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../../constants'
import { useNavigate } from 'react-router'

export const ProductCard = ({ product }: { product: Product }) => {
    const { id, name, price } = product
    return (
        <Card sx={{
            width: '345px',
            margin: '2px'
        }}>
            <CardActionArea>
                <CardMedia component={'img'} image='https://media.istockphoto.com/id/1430060145/photo/sweet-tasty-fried-indian-dish-samosha-indian-delicious-deep-fried-breakfast-samosa-also-know.jpg?s=612x612&w=0&k=20&c=bxOAfJThGKNSzugC7Id_vPO9l5UPljCKSgOc18-2vS0='
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
