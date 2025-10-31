import React, { createContext, useEffect, useMemo, useState } from "react";
import { FieldErrors, User } from "./types";
import { loginUser, logoutUser, registerUser, userProfile } from "./api/authClient";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

type AuthContextType = {
    user: User | null,
    register: Function,
    login: Function,
    logout: Function,
    fieldErrors: FieldErrors | undefined,
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    register: () => { },
    login: () => { },
    logout: () => { },
    fieldErrors: undefined
})

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [user, setUser] = useState<User | null>(null)
    const [fieldErrors, setFieldErrors] = useState<FieldErrors | undefined>(undefined)


    const navigate = useNavigate()

    useEffect(() => {
        userProfile().then((res) => {
            setUser(res.user)
        }).catch((e) => {
            console.log(e)
            setUser(null)
        })
    }, [])

    const register = async (email: string, password: string, name: string) => {
        registerUser(email, password, name).then(res => {
            console.log(res.message)
            setFieldErrors(undefined)
            navigate('/login')
        }).catch((err: AxiosError<FieldErrors>) => {
            console.log(err.response?.data)
            setFieldErrors(err.response?.data)
        })
    }

    const login = async (email: string, password: string) => {
        try {
            await loginUser(email, password)
            const profileRes = await userProfile()
            setUser(profileRes.user)
            setFieldErrors(undefined)
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    const logout = async () => {
        await logoutUser()
        setUser(null)
        navigate('/')
    }

    const value = useMemo(() => ({ user, register, login, logout, fieldErrors }), [user, fieldErrors])

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}