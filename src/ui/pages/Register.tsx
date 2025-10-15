import { Box, Button, Card, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { registerUser } from '../../api/authClient'
import { AuthContext } from '../../AuthContext'

export const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const { register } = useContext(AuthContext)

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
                <TextField label='Name' variant='outlined' value={name} onChange={(e) => setName(e.target.value)} />
                <TextField label='Email' variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label='Password' type='password' variant='outlined' value={password} onChange={(e) => setPassword(e.target.value)} />
                <TextField label='Re-type Password' type='password' variant='outlined' value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
                <Button variant='contained' sx={{ backgroundColor: 'orange' }} onClick={() => register(email, password, name)}>Sign up</Button>
            </Card>
        </Box>
    )
}
