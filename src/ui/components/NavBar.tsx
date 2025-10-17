import React, { useContext } from 'react'
import { AppBar, Box, CardActionArea, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { AccountLinks } from './AccountLinks'
import { AuthContext } from '../../AuthContext'

export const NavBar = () => {
    const { user } = useContext(AuthContext)
    let navigate = useNavigate()

    const MenuLink = () => {
        if (user) {
            return (
                <Typography variant='h6'
                    sx={{
                        fontFamily: 'serif',
                        fontWeight: 200,
                    }}>
                    Menu
                </Typography>
            )
        }
        return <></>
    }
    return (
        <AppBar sx={{
            display: 'flex',
            backgroundColor: 'orange',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '70px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                m: 1
            }}>
                <Typography variant="h4"
                    noWrap
                    sx={{
                        fontFamily: 'serif',
                        fontWeight: 200,
                        alignContent: 'center',
                        mr: 2,
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
                        letterSpacing: '.1rem',
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
