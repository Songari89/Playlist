import React, { useContext } from "react";
import { ColorChangeContext } from "../hooks/ColorChangeProvider";

export default function ColorChange() {
  const {
    changeToRedMode,
    changeToBlueMode,
    changeToGreenMode,
  } = useContext(ColorChangeContext);
  const changeToRedHandler = () => {changeToRedMode()};
  const changeToBlueHandler = () => {changeToBlueMode()};
  const changeToGreenHandler =() => {changeToGreenMode()};
  return(
  <div className="colorchangecontainer">
    <button className="toredmode" onClick={changeToRedHandler}>RED MODE</button>
    <button className="tobluemode" onClick={changeToBlueHandler}>BLUE MODE</button>
    <button className="togreenmode" onClick={changeToGreenHandler}>GREEN MODE</button>
  </div>);
}
