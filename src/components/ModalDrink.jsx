import { Modal, Image } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const ModalDrink = () => {
  const { modalHandleClick, modal, recipe } = useDrink();
  console.log(recipe);

  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <Modal show={modal} onHide={modalHandleClick}>
      <Image
        src={recipe.strDrinkThumb}
        alt={`Recipe image ${recipe.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{recipe.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h5>Ingredients</h5>
          {showIngredients()}
          <h5 className="mt-4">Preparation</h5>
          {recipe.strInstructions}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDrink;
