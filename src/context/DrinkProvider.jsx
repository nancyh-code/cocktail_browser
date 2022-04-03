import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinkContext = createContext();

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);

  const searchDrinks = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.name}&c=${datos.category}`;

      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const modalHandleClick = () => {
    setModal(!modal);
  };

  return (
    <DrinkContext.Provider
      value={{ searchDrinks, drinks, modalHandleClick, modal }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export { DrinkProvider };
export default DrinkContext;
