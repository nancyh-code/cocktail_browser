import { Col, Card, Button } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const Drink = ({ drink }) => {
  const { modalHandleClick, drinkHandleClick } = useDrink();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4 card-custom">
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`${drink.strDrink} image`}
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Button
            className="w-100 tex-uppercase"
            variant="custom"
            onClick={() => {
              modalHandleClick();
              drinkHandleClick(drink.idDrink);
            }}
          >
            View Recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
