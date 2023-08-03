import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState();
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode?'darkmode': ''}>{children}</div>
    </DarkModeContext.Provider>
  );
}
