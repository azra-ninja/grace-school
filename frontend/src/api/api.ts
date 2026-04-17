import axios from "axios";
import { BASE_URL } from "../constants/constants";
import type { LoginInput, RegisterInput, User, UserResponse } from "../types/User";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export const registerUser = async (data: RegisterInput) => {
  const res = await api.post<UserResponse>("/auth/sign-up", data);
  return res.data;
};


export const loginUser = async (data: LoginInput) => {
  const res = await api.post<UserResponse>("/auth/sign-in", data);
  return res.data;
}

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/user");
  return res.data;
}