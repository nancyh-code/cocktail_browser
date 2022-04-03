import { Row } from "react-bootstrap";
import useDrink from "../hooks/useDrink";
import Drink from "./Drink";

const DrinksList = () => {
  const { drinks } = useDrink();

  return (
    <Row>
      {drinks.map((drink) => (
        <Drink drink={drink} key={drink.idDrink} />
      ))}
    </Row>
  );
};

export default DrinksList;
