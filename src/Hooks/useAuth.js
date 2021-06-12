import React, { createContext, useContext, useState } from "react";

const CREDENTIAL = {
  email: "akshaydighorikar@gmail.com",
  password: "Test@123",
};

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

export function ProvideAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = (email, password, cb) => {
    if (email === CREDENTIAL.email && password === CREDENTIAL.password) {
      setUser({ email, password });
      cb(true);
    }
    cb(false);
  };

  const signOut = () => {
    setUser(null);
  };

  return { user, signIn, signOut };
}

export default useAuth;
