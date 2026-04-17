import useGetUsers from "../query/useGetUsers";
import type { User } from "../types/User";

const User = () => {
  const { data: users, isLoading, error } = useGetUsers();
  return (
    <div className="overflow-x-auto">
      {isLoading ? "Loading..." : "No users"}
      {error && (
        <p className="text-red-500 text-sm">
          {(error as any)?.response?.data?.message ||
            "Something went wrong" ||
            console.log(error)}
        </p>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="[&>tr:nth-child(odd)]:bg-base-200">
          {users?.map((user: User, index: number) => (
            <tr key={user._id}>
              <th>{ index + 1 }</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
