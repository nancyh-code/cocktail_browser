import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategory from "../hooks/useCategory";

const EntryForm = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const [alert, setAlert] = useState("");

  const { categories } = useCategory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("All fields are required");
      return;
    }
    setAlert("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3 custom-text">
            <Form.Label htmlFor="name">Drink Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tequila, whisky, beer, etc."
              name="name"
              value={search.name}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3 custom-text">
            <Form.Label htmlFor="category">Drink Category</Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>-Select Category-</option>
              {categories.map((item) => (
                <option key={item.strCategory} value={item.strCategory}>
                  {item.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            className="text-uppercase w-100 btn-custom"
            variant="custom"
            type="submit"
          >
            Search Drinks
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EntryForm;
