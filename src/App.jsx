import { Container } from "react-bootstrap";
import EntryForm from "./components/EntryForm";

function App() {
  return (
    <>
      <header className="py-4">
        <h1>🍹 Cocktail Browser</h1>
      </header>
      <Container className="mt-5">
        <EntryForm />
      </Container>
    </>
  );
}

export default App;
