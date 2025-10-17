import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductWithId } from '../../api/productClient'
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Product, Purchase } from '../../constants'
import { IncrementalButton } from '../components/IncrementalButton'
import { StoreContext } from '../../StoreContext'
import { saveCart } from '../../actions/cartActions'

export const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product>()
    const [count, setCount] = useState(1)

    const { cart, setCart } = useContext(StoreContext)

    const addToCart = () => {
        if (product) {
            let newCart = []
            const copyCart = [...cart]
            const productIndex = copyCart.findIndex(p => p.product_id === product.id)
            if (productIndex !== -1) {
                copyCart[productIndex].product_count += count
                newCart = [...copyCart]
            } else {
                const newPurchase: Purchase = {
                    product_id: product.id,
                    product_name: product.name,
                    product_price: product.price,
                    product_count: count,
                }
                newCart = [...cart, newPurchase]
            }
            saveCart(newCart)
            setCart(newCart)
        }
    }

    useEffect(() => {
        getProductWithId(Number(id)).then(res => setProduct(res.product)).catch((e) => console.log(e))
    }, [id])

    const PageContent = () => {
        if (product) {
            return (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '89vh',
                    width: '100%',
                    mt: '85px',
                }}>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        mx: 2,
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
                            <Typography variant='h3'>
                                ${product.price}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                px: 10,
                                justifySelf: 'center',
                            }}>
                                <IncrementalButton count={count} setCount={setCount} />
                                <Button variant='contained' onClick={addToCart} sx={{
                                    my: 1,
                                }}>Add to Cart</Button>
                            </Box>
                            <Typography sx={{
                                m: 1
                            }}>
                                {product.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
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
