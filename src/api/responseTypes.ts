import { FieldErrors, User } from "../constants"

export type AuthResponse = {
    message?: string,
    error?: string,
    fieldErrors?: FieldErrors,
}

export type ProfileResponse = {
    user: User,
}