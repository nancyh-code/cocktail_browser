import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinkContext = createContext();

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const obtainRecipe = async () => {
      if (!drinkId) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    obtainRecipe();
  }, [drinkId]);

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

  const drinkHandleClick = (id) => {
    setDrinkId(id);
  };

  return (
    <DrinkContext.Provider
      value={{
        searchDrinks,
        drinks,
        modalHandleClick,
        modal,
        drinkHandleClick,
        recipe,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export { DrinkProvider };
export default DrinkContext;
