import { useState } from "react";
import { useCreateUser } from "../mutations/useCreateUser";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, error } = useCreateUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({
      name,
      email,
      password,
    });
  };
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-[#0E1722] rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-16 mt-4 text-center">
          Create User
        </h1>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-8 p-2 rounded-xl bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
          />

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

          <div className="flex">
            <Link
              to="/users"
              className="m-2 w-full bg-red-600 hover:bg-red-500 p-2 rounded mb-4 text-center"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="m-2 w-full bg-[#0C0C2B] hover:bg-blue-600 p-2 rounded mb-4"
            >
              {isPending ? "Loading..." : "Submit"}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {(error as any)?.response?.data?.message ||
                "Something went wrong."}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
