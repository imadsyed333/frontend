import React, { useContext } from 'react'
import { AppBar, Box, CardActionArea, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { AccountLinks } from './account/AccountLinks'
import { AuthContext } from '../../context/AuthContext'

export const NavBar = () => {
    const { user } = useContext(AuthContext)
    let navigate = useNavigate()

    const MenuLink = () => {
        if (user) {
            return (
                <Typography variant='h6'>
                    Menu
                </Typography>
            )
        }
        return <></>
    }
    return (
        <AppBar sx={{
            display: 'flex',
            backgroundColor: '#f89259',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '70px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                ml: 1,
                height: '100%',
                alignItems: 'center'
            }}>
                <Box component={'img'} src='logo.png' alt='logo' sx={{
                    height: '90%',
                    mr: 1
                }} />
                <Typography variant="h4"
                    noWrap
                    sx={{
                        alignContent: 'center',
                        mr: 2,
                        letterSpacing: '.2rem',
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
                        <Typography variant='h6'>
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
                        <MenuLink />
                    </CardActionArea>
                </Box>
            </Box>
            {
                user && <AccountLinks />
            }
            {
                !user && <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <CardActionArea sx={{
                        m: 1,
                        p: 1,
                        borderRadius: 1,
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                        alignItems: 'center',
                    }} onClick={() => {
                        navigate('/login')
                    }}>
                        <Typography variant='h6' noWrap>Login</Typography>
                    </CardActionArea>
                </Box>
            }
        </AppBar>
    )
}
