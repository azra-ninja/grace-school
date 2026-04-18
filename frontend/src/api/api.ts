import axios from "axios";
import { BASE_URL } from "../constants/constants";
import type { LoginInput, RegisterInput, UpdateInput, User, UserResponse } from "../types/User";

// axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// for token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// to redirect 401 pages
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

// Auth api functions
// Register user function
export const registerUser = async (data: RegisterInput) => {
  const res = await api.post<UserResponse>("/auth/sign-up", data);
  return res.data;
};

// Login user function
export const loginUser = async (data: LoginInput) => {
  const res = await api.post<UserResponse>("/auth/sign-in", data);
  return res.data;
}

// Users api functions
// Get all users function
export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/user");
  return res.data;
}

// Get a single user function
export const getUser = async (id: string): Promise<User[]> => {
  const res = await api.get<User[]>(`/user/${id}`);
  return res.data;
}

// Create user function
export const createUser = async (data: RegisterInput) => {
  const res = await api.post("/user", data);
  return res.data;
}

// Update user function
export const updateUser = async(id: string, data: Partial<UpdateInput>) => {
  const res = await api.put(`/user/${id}`, data);
  return res.data as UpdateInput;
}