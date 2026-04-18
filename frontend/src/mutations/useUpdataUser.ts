import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api/api";
import type { UpdateInput } from "../types/User";
import { useNavigate } from "react-router-dom";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<UpdateInput> }) =>
      updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/users");
    },
  });
};
