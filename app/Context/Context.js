"use client";
// context/Context.js
import React, { useContext, useState } from "react";

const Context = React.createContext();

export function ContextProvider({ children }) {
  const [menu, setMenu] = useState(false);
  
  return (
    <Context.Provider value={{ menu, setMenu }}>
      {children}
    </Context.Provider>
  );
}

export function useGlobalContext() {
  return useContext(Context);
}
