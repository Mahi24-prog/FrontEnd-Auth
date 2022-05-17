import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../Contexts/LoginContext";

export default function Login() {
  const { login, setLogin } = useLogin();
  const location = useLocation();
  const navigate = useNavigate();
  const fromPath = location?.state?.from?.pathname;
  return (
    <div className="App">
      <h1>Login Page</h1>
      <button
        onClick={() => {
          setLogin(!login);

          navigate(fromPath ? fromPath : "/");
        }}
      >
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
}
