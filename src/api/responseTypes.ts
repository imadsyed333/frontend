import { FieldErrors, User } from "../types";

export type AuthResponse = {
  message?: string;
  error?: string;
  fieldErrors?: FieldErrors;
};

export type LoginResponse = {
  user?: User;
  error?: string;
};

export type ProfileResponse = {
  user: User;
};
