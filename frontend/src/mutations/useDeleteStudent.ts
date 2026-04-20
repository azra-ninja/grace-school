import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "../api/api";

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
};
