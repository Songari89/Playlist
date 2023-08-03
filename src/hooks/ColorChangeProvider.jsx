import React, { createContext, useState } from "react";

export const ColorChangeContext = createContext();

export default function ColorChangeProvider({ children }) {
  const [toRedMode, setToRedMode] = useState(false);
  const [toBlueMode, setToBlueMode] = useState(false);
  const [toGreenMode, setToGreenMode] = useState(false);
  const changeToRedMode = () => {
    setToRedMode((mode) => !mode);
    setToBlueMode(false);
    setToGreenMode(false);
  };
  const changeToBlueMode = () => {
    setToBlueMode((mode) => !mode);
    setToRedMode(false);
    setToGreenMode(false);
  };
  const changeToGreenMode = () => {
    setToGreenMode((mode) => !mode);
    setToRedMode(false);
    setToBlueMode(false);
  };
  return (
    <ColorChangeContext.Provider
      value={{
        toRedMode,
        toBlueMode,
        toGreenMode,
        changeToRedMode,
        changeToBlueMode,
        changeToGreenMode,
      }}
    >
      <div className="colorchangeprovider">{children}</div>
    </ColorChangeContext.Provider>
  );
}
