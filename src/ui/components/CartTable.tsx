import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useContext } from 'react'
import { StoreContext } from '../../StoreContext'
import { IncrementalButton } from './IncrementalButton'
import { Purchase } from '../../constants'
import { Delete } from '@mui/icons-material'

export const CartTable = () => {
    const { cart, setCart } = useContext(StoreContext)

    const setCountAt = (key: number, value: number) => {
        const copyCart: Purchase[] = [...cart]
        copyCart[key].count = value
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
                    backgroundColor: 'orange',
                }}>
                    <TableRow>
                        <TableCell align='left' padding='none' size='small'></TableCell>
                        <TableCell align='left'>Product</TableCell>
                        <TableCell align='left'>Price</TableCell>
                        <TableCell align='center'>Count</TableCell>
                        <TableCell align='right'>Total</TableCell>
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
                                            color: 'red',
                                        }} />
                                    </Button>
                                </TableCell>
                                <TableCell align='left'>{purchase.product_name}</TableCell >
                                <TableCell align='left'>${purchase.product_price}</TableCell>
                                <TableCell sx={{
                                    px: 1
                                }}>

                                    <IncrementalButton count={purchase.count} setCount={(value: number) => { setCountAt(key, value) }} />
                                </TableCell>
                                <TableCell align='right'>${purchase.product_price * purchase.count}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
