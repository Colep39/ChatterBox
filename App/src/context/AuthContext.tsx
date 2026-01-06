/* eslint-disable react-refresh/only-export-components */

// import { useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

import { IUser } from "@/types";
import { getCurrentUser } from "@/lib/appwrite/api";

export const INITIAL_USER: IUser = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
};

type IContextType = {
  user: IUser;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

const AuthContext = createContext<IContextType>({
  user: INITIAL_USER,
  isLoading: true,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // const navigate = useNavigate();

  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthUser = async (): Promise<boolean> => {
    try {
      const currentAccount = await getCurrentUser();

      if (!currentAccount) {
        setIsAuthenticated(false);
        setUser(INITIAL_USER);
        return false;
      }

      setUser({
        id: currentAccount.$id,
        name: currentAccount.name,
        username: currentAccount.username,
        email: currentAccount.email,
        imageUrl: currentAccount.imageUrl,
        bio: currentAccount.bio,
      });

      setIsAuthenticated(true);
      return true;
    } catch {
      // NOT an error — user is simply not logged in
      setIsAuthenticated(false);
      setUser(INITIAL_USER);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthUser();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        checkAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useUserContext = () => useContext(AuthContext);
