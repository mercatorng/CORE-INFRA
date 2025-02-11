import React, { useContext, useReducer } from "react";
import { appReducer } from "./reducer";
import { useState, useEffect } from "react";

export const AppContext = React.createContext();

const defaultState = {
  activePage: "",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const path = window.location.pathname;
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    // Add an event listener to update the window width when it changes
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // check contact us path
  const contactUsPath = "/contact-us";
  const checkContactUsPath = path === contactUsPath;

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        windowWidth,
        path,
        activeLink,
        setActiveLink,
        checkContactUsPath,
        contactUsPath
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
