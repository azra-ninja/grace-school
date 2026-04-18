import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export const useCreateUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      navigate("/users");
    },
  });
};
