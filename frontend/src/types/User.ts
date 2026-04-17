export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface UserResponse {
  token: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}
