import { Box, Button, Card, TextField } from '@mui/material'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'

export const Login = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { handleLogin } = useAuth();

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
                <TextField label='Username' variant='outlined' value={username} onChange={(e) => setUsername(e.target.value)} />
                <TextField label='Password' type='password' variant='outlined' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant='contained' sx={{ backgroundColor: 'orange' }} onClick={() => handleLogin(username, password)}>Login</Button>
            </Card>
        </Box>
    )
}
