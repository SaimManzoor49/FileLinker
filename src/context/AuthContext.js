import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";



const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setUser(user);
        localStorage.setItem("isAuth", "true");

        const getUserData = async()=>{
          const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setUserData(docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
        }
        getUserData()

      } else {
        // User is signed out
        // ...
        setUser({});
        localStorage.setItem("isAuth", "false");
      }
      // user.uid && getUserData()
    });
  }, []);



 

  return (
    <AuthContext.Provider value={{ user, setUser,userData,setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
