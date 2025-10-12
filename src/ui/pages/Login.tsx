import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../../AuthContext'
import { NavLink } from 'react-router'

export const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { login } = useContext(AuthContext)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '89vh',
            width: '100%',
            mt: '85px',
        }}>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 5,
                gap: 2,
            }}>
                <TextField label='Email' variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label='Password' type='password' variant='outlined' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant='contained' sx={{ backgroundColor: 'orange' }} onClick={() => login(email, password)}>Login</Button>
                New here?
                <NavLink to={'/register'}>Sign up</NavLink>
            </Card>
        </Box>
    )
}
