import React from 'react'
import { AppBar, Box, Menu, MenuItem, Typography } from '@mui/material'

export const NavBar = () => {
    return (
        <AppBar sx={{
            display: 'flex',
            backgroundColor: 'orange',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Typography variant="h4"
                    noWrap
                    sx={{
                        mx: 2,
                        my: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'serif',
                        fontWeight: 200,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    Samosa Stuff
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Typography variant='h6' noWrap
                        sx={{
                            mx: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'serif',
                            fontWeight: 200,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: 'center'
                        }}>
                        Home
                    </Typography>
                    <Typography variant='h6' noWrap
                        sx={{
                            mx: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'serif',
                            fontWeight: 200,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: 'center'
                        }}>
                        Menu
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'inherit'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Typography variant='h6' noWrap
                        sx={{
                            mx: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'serif',
                            fontWeight: 200,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: 'center'
                        }}>
                        My Cart
                    </Typography>
                    <Typography variant='h6' noWrap
                        sx={{
                            mx: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'serif',
                            fontWeight: 200,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: 'center'
                        }}>
                        Hi, Walter!
                    </Typography>
                </Box>
            </Box>
        </AppBar>
    )
}
