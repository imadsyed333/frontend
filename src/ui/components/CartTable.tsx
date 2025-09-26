import { Card, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../StoreContext'
import { IncrementalButton } from './IncrementalButton'

export const CartTable = () => {
    const { cart, setCart } = useContext(StoreContext)

    const setCountAt = (product_id: number, value: number) => {

    }

    return (
        <TableContainer>
            <Table>
                <TableHead sx={{
                    backgroundColor: 'orange',
                }}>
                    <TableRow>
                        <TableCell align='center'>Product</TableCell>
                        <TableCell align='right'>Price</TableCell>
                        <TableCell align='center'>Count</TableCell>
                        <TableCell align='right'>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cart.map((purchase) => (
                            <TableRow key={purchase.product_id}>
                                <TableCell align='center'>{purchase.product_name}</TableCell >
                                <TableCell align='right'>${purchase.product_price}</TableCell>
                                <TableCell>
                                    <IncrementalButton count={purchase.count} setCount={(value: number) => { setCountAt(purchase.product_id, value) }} />
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
