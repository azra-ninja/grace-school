import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/api";

export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};
