import { useQuery } from "@tanstack/react-query";
import { getStudent } from "../api/api";

export const useGetStudent = (id: string) => {
  return useQuery({
    queryKey: ["student"],
    queryFn: () => getStudent(id),
    enabled: !!id,
  });
};
