import { Container } from "react-bootstrap";
import EntryForm from "./components/EntryForm";
import { CategoryProvider } from "./context/CategoryProvider";

function App() {
  return (
    <CategoryProvider>
      <header className="py-4">
        <h1>🍹 Cocktail Browser</h1>
      </header>
      <Container className="mt-5">
        <EntryForm />
      </Container>
    </CategoryProvider>
  );
}

export default App;
