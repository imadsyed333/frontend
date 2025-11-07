import { Box, Typography } from '@mui/material'
import React from 'react'

export const CheckoutSuccessPage = () => {
  return (
    <Box sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Typography>Success!</Typography>
    </Box>
  )
}
