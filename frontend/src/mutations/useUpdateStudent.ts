import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Student } from "../types/Student";
import { useNavigate } from "react-router-dom";
import { updateStudent } from "../api/api";

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Student> }) =>
      updateStudent(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      navigate("/students");
    },
  });
};
