import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { React, useContext, useState, useEffect, createContext } from "react";
import auth from "../firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      setCurrentUser(user); // Update current user state
      return user;
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };

  const logOut = () => {
    return signOut(auth)
  }

  const login = (email , password) => {
    return signInWithEmailAndPassword(auth ,email, password)
  }

  const resetPassword = (email)=> {
    return sendPasswordResetEmail(auth, email);
  }

  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser , email);
  }

  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser , password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        logOut,
        login,
        resetPassword,
        updateUserEmail,
        updateUserPassword
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  
  return useContext(AuthContext);
};
export default AuthProvider;
