import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
export const AuthContext = createContext();
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   setting observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curreuser) => {
      setUser(curreuser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //   google sign In
  const googleProvider = new GoogleAuthProvider();
  function googleSingnIn() {
    return signInWithPopup(auth, googleProvider);
  }

  //   singOut
  function logOut() {
    return signOut(auth);
  }
  console.log(user);
  const sharedData = {
    user,
    setUser,
    loading,
    setLoading,
    googleSingnIn,
    logOut,
  };
  return <AuthContext value={sharedData}>{children}</AuthContext>;
}
