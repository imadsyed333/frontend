import { Box, Button, Card, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ErrorBox } from '../components/ErrorBox'

export const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const { register, fieldErrors } = useContext(AuthContext)

    const [passwordMatch, setPasswordMatch] = useState(true)

    const submitForm = () => {
        setPasswordMatch(password === retypePassword)
        register(email, password, name)
    }

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
                height: 'fit-content',
                width: '20%'
            }}>
                <TextField label='Name' variant='outlined' value={name} onChange={(e) => setName(e.target.value)} error={(fieldErrors?.name) !== undefined} />

                <ErrorBox errors={fieldErrors?.name} />

                <TextField label='Email' variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)} error={(fieldErrors?.email) !== undefined} />

                <ErrorBox errors={fieldErrors?.email} />

                <TextField label='Password' type='password' variant='outlined' value={password} onChange={(e) => setPassword(e.target.value)} error={(fieldErrors?.password) !== undefined} />

                <ErrorBox errors={fieldErrors?.password} />

                <TextField label='Re-type Password' type='password' variant='outlined' value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />

                {
                    passwordMatch ? <></> : (
                        <ErrorBox errors={["Passwords do not match"]} />
                    )
                }

                <Button variant='contained' sx={{ backgroundColor: '#f89259' }} onClick={() => submitForm()}>Sign up</Button>
            </Card>
        </Box>
    )
}
