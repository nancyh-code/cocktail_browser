import { useContext } from "react";
import DrinkContext from "../context/DrinkProvider";

const useDrink = () => {
  return useContext(DrinkContext);
};

export default useDrink;
