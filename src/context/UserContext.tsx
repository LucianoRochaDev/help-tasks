import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  Auth,
  UserCredential,
} from "firebase/auth";
import React, { createContext, PropsWithChildren, useState } from "react";

interface AuthContextData {
  userCtx: User | null;
  auth: Auth;
  cadastrarUsuario: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>;

  loginUsuario: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>;
}

const UserContext = createContext<AuthContextData>({} as AuthContextData);

const UserContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth();

  const cadastrarUsuario = createUserWithEmailAndPassword;
  const loginUsuario = signInWithEmailAndPassword;

  return (
    <UserContext.Provider
      value={{ userCtx: user, auth, cadastrarUsuario, loginUsuario }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
