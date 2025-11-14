import api from "./api";
import { AuthResponse, LoginResponse, ProfileResponse } from "./responseTypes";

export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  const res = await api.post<AuthResponse>("/user/register", {
    email,
    password,
    name,
  });
  return res.data;
};

export const loginUser = async (email: string, password: string) => {
  const res = await api.post<LoginResponse>("/user/login", { email, password });
  return res.data;
};

export const refreshUser = async () => {
  const res = await api.post<AuthResponse>("/user/refresh");
  return res.data;
};

export const logoutUser = async () => {
  const res = await api.post<AuthResponse>("/user/logout");
  return res.data;
};

export const userProfile = async () => {
  const res = await api.get<ProfileResponse>("/user/profile");
  return res.data;
};
