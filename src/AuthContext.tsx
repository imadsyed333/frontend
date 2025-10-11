import React, { createContext, useEffect, useMemo, useState } from "react";
import { User } from "./constants";
import { loginUser, logoutUser, userProfile } from "./actions/authClient";
import { useNavigate } from "react-router";

type AuthContextType = {
    user: User | null,
    login: Function,
    logout: Function
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => { },
    logout: () => { }
})

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [user, setUser] = useState<User | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        userProfile().then((res) => {
            setUser(res.user)
        }).catch(() => {
            console.log("Unexpected error")
            setUser(null)
        })
    }, [])

    const login = async (email: string, password: string) => {
        try {
            await loginUser(email, password)
            const profileRes = await userProfile()
            setUser(profileRes.user)
            navigate('/')
        } catch (e) {
            console.log("Unexpected error")
        }
    }

    const logout = async () => {
        await logoutUser()
        setUser(null)
        navigate('/')
    }

    const value = useMemo(() => ({ user, login, logout }), [user])

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}