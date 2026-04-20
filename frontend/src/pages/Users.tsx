import { Link } from "react-router-dom";
import useGetUsers from "../query/useGetUsers";
import type { User } from "../types/User";
import { useDeleteUser } from "../mutations/useDeleteUser";

const Users = () => {
  const { data: users, isLoading, error } = useGetUsers();
  const { mutate, isPending } = useDeleteUser();

  const handleDeleteUser = (id: string, name: string) => {
    const confirmDelete = window.confirm(`Are you sure want to delete ${name}`);

    if (confirmDelete) {
      mutate(id);
    }
  };
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end">
        <Link
          to="/users/create"
          className="bg-green-600 p-3 rounded-xl hover:bg-green-500"
        >
          Create a New User
        </Link>
      </div>

      {isLoading ? "Loading..." : null}
      {error && (
        <p className="text-red-500 text-sm">
          {(error as any)?.response?.data?.message || "Something went wrong"}
        </p>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Update & Delete</th>
          </tr>
        </thead>
        <tbody className="[&>tr:nth-child(odd)]:bg-base-200">
          {users?.map((user: User, index: number) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>
                <Link
                  to={`/users/update/${user._id}`}
                  className="bg-yellow-500 p-3 m-2 rounded-lg hover:bg-yellow-400"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDeleteUser(user._id, user.name)}
                  className="bg-red-600 p-3 m-2 rounded-lg hover:bg-red-500"
                >
                  {isPending ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
