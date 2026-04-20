import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../api/api";
import type { Student } from "../types/Student";

export const useGetStudents = () => {
  return useQuery<Student[]>({
    queryKey: ["students"],
    queryFn: getStudents,
  });
};
