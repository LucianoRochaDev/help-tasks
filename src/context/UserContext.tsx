import { signInWithPopup, signOut, User } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { createContext, PropsWithChildren, useState } from "react";
import {
  auth,
  facebookProvider,
  firestoreDb,
  githubProvider,
  googleProvider,
  microsoftProvider,
  twitterProvider,
} from "../config/firebase";
import { UserModel } from "../models/UserFirestore";

interface AuthContextData {
  user: UserModel | null;
  Login: (socialProvider: string) => Promise<void>;
  Logout: () => void;
}

const UserContext = createContext<AuthContextData>({} as AuthContextData);

const UserContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<UserModel | null>(null);

  const Login = async (socialProvider: string) => {
    let alternativaSocial;
    let userData: User;

    socialProvider === "google" && (alternativaSocial = googleProvider);
    socialProvider === "facebook" && (alternativaSocial = facebookProvider);
    socialProvider === "twitter" && (alternativaSocial = twitterProvider);
    socialProvider === "github" && (alternativaSocial = githubProvider);
    socialProvider === "microsoft" && (alternativaSocial = microsoftProvider);

    if (alternativaSocial)
      try {
        const res = await signInWithPopup(auth, alternativaSocial);
        userData = res.user;
        const userQuery = query(
          collection(firestoreDb, "users"),
          where("uid", "==", userData.uid)
        );
        const docsResponse = await getDocs(userQuery);
        if (docsResponse.docs.length === 0) {
          await addDoc(collection(firestoreDb, "users"), {
            authProvider: userData.providerId,
            email: userData.email,
            name: userData.displayName,
            uid: userData.uid,
          });
        }
        setUser({
          authProvider: userData.providerId,
          email: userData.email,
          name: userData.displayName,
          uid: userData.uid,
        });
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          if (
            error.message.includes("account-exists-with-different-credential")
          ) {
            alert(
              `E-mail já cadastrado. Se for um gmail, clique em "Continuar com Google".`
            );
          } else alert(error.message);
        }
      }
  };

  const Logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user: user, Login, Logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
