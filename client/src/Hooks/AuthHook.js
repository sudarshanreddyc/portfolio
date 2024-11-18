import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuthenticated } from "../Auth/Authutils";

export const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      //   navigate("/loginsignup");
    }
  }, [navigate]);
};
