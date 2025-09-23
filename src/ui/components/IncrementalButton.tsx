import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import React, { useState } from 'react'

export const IncrementalButton = ({ count, setCount }: { count: number, setCount: Function }) => {

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Button onClick={decrementCount} variant='contained' sx={{
                m: 1
            }}><RemoveIcon /></Button>
            <Box sx={{
                backgroundColor: 'whitesmoke',
                px: 1,
                border: 1,
                borderRadius: 1
            }}>
                <Typography>{count}</Typography>
            </Box>
            <Button onClick={incrementCount} variant='contained' sx={{
                m: 1
            }}><AddIcon /></Button>
        </Box>
    )
}
