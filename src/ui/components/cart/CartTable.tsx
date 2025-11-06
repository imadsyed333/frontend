import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { IncrementalButton } from '../IncrementalButton'
import { Delete } from '@mui/icons-material'
import { formatPrice } from '../../../utils'
import { CartItem, DeleteItem, UpdateItem } from '../../../types'

export const CartTable = () => {
    const [cart, setCart] = useState<CartItem[]>([])

    const [updateItems, setUpdateItems] = useState<UpdateItem[]>([])
    const [deleteItems, setDeleteItems] = useState<DeleteItem[]>([])

    const setCountAt = (key: number, id: number, value: number) => {
        const copyUpdateItems = [...updateItems]
        const index = updateItems.findIndex(item => item.id === id)

        if (index > -1) {
            copyUpdateItems[index].quantity = value
        } else {
            copyUpdateItems.push({
                id,
                quantity: value,
            })
        }
        setUpdateItems(copyUpdateItems)

        const copyCart: CartItem[] = [...cart]
        copyCart[key].quantity = value
        setCart(copyCart)
    }

    const deleteOrderAt = (key: number, id: number,) => {
        const copyDeleteItems = [...deleteItems]
        const index = deleteItems.findIndex(item => item.id === id)

        if (index < 0) {
            copyDeleteItems.push({
                id
            })
        }
        setDeleteItems(copyDeleteItems)

        const copyCart: CartItem[] = [...cart]
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
                        cart.map((item, key) => (
                            <TableRow key={key}>
                                <TableCell align='left' padding='none' size='small'>
                                    <Button onClick={() => { deleteOrderAt(key, item.id) }} sx={{
                                        py: 1
                                    }}>
                                        <Delete sx={{
                                            color: '#D81159',
                                        }} />
                                    </Button>
                                </TableCell>
                                <TableCell align='left'>{item.product.name}</TableCell >
                                <TableCell align='left'>${formatPrice(item.product.price)}</TableCell>
                                <TableCell sx={{
                                    px: 1
                                }}>
                                    <IncrementalButton count={item.quantity} setCount={(value: number) => { setCountAt(key, item.id, value) }} />
                                </TableCell>
                                <TableCell align='right'>${formatPrice(item.product.price * item.quantity)}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
