import React, { ReactNode, createContext, useState, useContext } from "react";
import { AppContext, User, SearchFilter } from "../types";

interface ProviderProps {
  children: ReactNode;
}

const Context = createContext<AppContext>({
  isLoggedIn: false,
  isTabbarVissible: true,
  setUserState: () => {},
  setTabbarState: () => {},
  user: {},
  addUserDetails: () => {},
});

// fullname: "Nelson Benson",
// email: "nelson@gmail.com",
// phone: "+1231231231",

const Provider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [isTabbarVissible, setIsTabbarVissible] = useState<boolean>(true);

  const [user, setUser] = useState<User>({
    phone: "+1231231231",
    fullname: "Nelson Benson",
    email: "nelson@gmail.com",
    password: "qwertyqw",
  });

  const setUserState = (state: boolean) => {
    setIsLoggedIn(state);
  };

  const setTabbarState = (state: boolean) => {
    setIsTabbarVissible(state);
  };

  const addUserDetails = (userDetails: User) => {
    setUser(userDetails);
  };

  const state: AppContext = {
    isLoggedIn,
    isTabbarVissible,
    setUserState,
    setTabbarState,
    user,
    addUserDetails,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
