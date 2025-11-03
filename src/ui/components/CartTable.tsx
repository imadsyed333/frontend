import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { IncrementalButton } from './IncrementalButton'
import { Purchase } from '../../types'
import { Delete } from '@mui/icons-material'
import { formatPrice } from '../../utils'

export const CartTable = () => {
    const { cart, setCart } = useContext(CartContext)

    const setCountAt = (key: number, value: number) => {
        const copyCart: Purchase[] = [...cart]
        copyCart[key].product_count = value
        setCart(copyCart)
    }

    const deletePurchaseAt = (key: number) => {
        const copyCart: Purchase[] = [...cart]
        copyCart.splice(key, 1)
        setCart(copyCart)
    }

    return (
        <TableContainer>
            <Table>
                <TableHead sx={{
                    backgroundColor: '#F89259',
                }}>
                    <TableRow>
                        <TableCell align='left' padding='none' size='small'></TableCell>
                        <TableCell align='left'>
                            <Typography variant='h6' color='white'>Product</Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography variant='h6' color='white'>Price</Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <Typography variant='h6' color='white'>Count</Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant='h6' color='white'>Total</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cart.map((purchase, key) => (
                            <TableRow key={key}>
                                <TableCell align='left' padding='none' size='small'>
                                    <Button onClick={() => { deletePurchaseAt(key) }} sx={{
                                        py: 1
                                    }}>
                                        <Delete sx={{
                                            color: '#D81159',
                                        }} />
                                    </Button>
                                </TableCell>
                                <TableCell align='left'>{purchase.product_name}</TableCell >
                                <TableCell align='left'>${formatPrice(purchase.product_price)}</TableCell>
                                <TableCell sx={{
                                    px: 1
                                }}>
                                    <IncrementalButton count={purchase.product_count} setCount={(value: number) => { setCountAt(key, value) }} />
                                </TableCell>
                                <TableCell align='right'>${formatPrice(purchase.product_price * purchase.product_count)}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
