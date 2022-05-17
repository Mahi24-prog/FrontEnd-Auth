import { createContext, useContext, useState } from "react";

const loginContext = createContext(null);

const useLogin = () => useContext(loginContext);

export default function LoginContext({ children }) {
  const [login, setLogin] = useState(false);

  return (
    <loginContext.Provider value={{ setLogin, login }}>
      {children}
    </loginContext.Provider>
  );
}

export { LoginContext, useLogin };
