import React from 'react'
import { AppBar, Box, CardActionArea, Menu, MenuItem, Typography } from '@mui/material'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'

export const NavBar = () => {
    let navigate = useNavigate()
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
                    <CardActionArea sx={{
                        m: 1,
                        p: 1,
                        borderRadius: 1,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        alignItems: 'center',
                    }} onClick={() => {
                        navigate('/')
                    }}>
                        <Typography variant='h6'
                            sx={{
                                fontFamily: 'serif',
                                fontWeight: 200,
                            }}>
                            Home
                        </Typography>
                    </CardActionArea>
                    <CardActionArea sx={{
                        m: 1,
                        p: 1,
                        borderRadius: 1,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        alignItems: 'center',
                    }} onClick={() => {
                        navigate('/menu')
                    }}>
                        <Typography variant='h6'
                            sx={{
                                fontFamily: 'serif',
                                fontWeight: 200,
                            }}>
                            Menu
                        </Typography>
                    </CardActionArea>
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
