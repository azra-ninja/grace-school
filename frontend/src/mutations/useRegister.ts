import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
