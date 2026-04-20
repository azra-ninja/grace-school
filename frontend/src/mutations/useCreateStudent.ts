import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../api/api";

export const useCreateStudent = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createStudent,
    onSuccess: () => {
      navigate("/students");
    },
  });
};
