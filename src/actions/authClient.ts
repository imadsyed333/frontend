import axios from "axios";
import { apiUrl, LoginResponse, LogoutResponse, ProfileResponse, RefreshResponse, RegisterResponse } from "../constants";

const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
})

export const registerUser = async (email: string, password: string, name: string) => {
    const res = await api.post<RegisterResponse>("user/register", { email, password, name })
    return res.data
}

export const loginUser = async (email: string, password: string) => {
    const res = await api.post<LoginResponse>("user/login", { email, password })
    return res.data
}

export const refreshUser = async () => {
    const res = await api.post<RefreshResponse>("/user/refresh")
    return res.data
}

export const logoutUser = async () => {
    const res = await api.post<LogoutResponse>("/user/logout")
    return res.data
}

export const userProfile = async () => {
    const res = await api.get<ProfileResponse>("/user/profile")
    return res.data
}