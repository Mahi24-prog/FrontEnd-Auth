import { Navigate, useLocation } from "react-router-dom";
import { useLogin } from "./Contexts/LoginContext";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const { login } = useLogin();

  return login ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
