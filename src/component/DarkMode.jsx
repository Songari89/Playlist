import React, { useContext } from "react";
import { DarkModeContext } from "../hooks/DarkModeProvider";

export default function DarkMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      <button onClick={() => toggleDarkMode()}>Mode</button>
    </div>
  );
}
