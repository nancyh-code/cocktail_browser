import { Container } from "react-bootstrap";
import DrinksList from "./components/DrinksList";
import EntryForm from "./components/EntryForm";
import ModalDrink from "./components/ModalDrink";
import { CategoryProvider } from "./context/CategoryProvider";
import { DrinkProvider } from "./context/DrinkProvider";

function App() {
  return (
    <CategoryProvider>
      <DrinkProvider>
        <header className="py-4">
          <h1>🍹 Cocktail Browser</h1>
        </header>
        <Container className="mt-5">
          <EntryForm />
          <DrinksList />
          <ModalDrink />
        </Container>
      </DrinkProvider>
    </CategoryProvider>
  );
}

export default App;
