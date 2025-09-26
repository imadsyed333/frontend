import { Box, Button, Input, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { NumberField } from '@base-ui-components/react'
import React from 'react'

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
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            border: 1,
            borderRadius: 1,
            borderColor: 'lightgray',
        }}>
            <Button onClick={decrementCount} sx={{
                m: 1,
                color: 'black'
            }}><RemoveIcon /></Button>
            <Typography>{count}</Typography>
            <Button onClick={incrementCount} sx={{
                m: 1,
                color: 'black'
            }}><AddIcon /></Button>
        </Box>
    )
}
