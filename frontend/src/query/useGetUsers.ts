import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/api";
import type { User } from "../types/User";

const useGetUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export default useGetUsers;
