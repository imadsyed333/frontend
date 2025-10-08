import { useEffect, useState } from "react"
import { User } from "../constants"
import { loginUser, logoutUser, userProfile } from "../actions/authClient"

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        userProfile().then((res) => setUser(res.user)).catch(() => setUser(null)).finally(() => setLoading(false))
    }, [])

    const handleLogin = async (email: string, password: string) => {
        await loginUser(email, password)
        const res = await userProfile()
        setUser(res.user)
    }

    const handleLogout = async () => {
        await logoutUser()
        setUser(null)
    }

    return { user, loading, handleLogin, handleLogout }
}