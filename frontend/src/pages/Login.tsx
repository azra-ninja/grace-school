import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../mutations/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, error } = useLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({
      email,
      password,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-[#0E1722] rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-16 mt-4 text-center">Login</h1>

        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-8 p-2 rounded-xl bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-8 p-2 rounded-xl bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#0C0C2B] hover:bg-blue-600 p-2 rounded mb-4"
          >
            {isPending ? "Loading" : "Login"}
          </button>

          {error && (
            <p className="text-red-500 text-sm">
              {(error as any)?.response?.data?.message ||
                "Something went wrong"}
            </p>
          )}

          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-[#3232B8]">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
