import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoreDb = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");
