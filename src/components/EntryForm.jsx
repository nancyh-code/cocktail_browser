import { Button, Form, Row, Col } from "react-bootstrap";
import useCategory from "../hooks/useCategory";

const EntryForm = () => {
  const { categories } = useCategory();

  console.log(categories);

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3 custom-text">
            <Form.Label htmlFor="name">Drink Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tequila, whisky, beer, etc."
              name="name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3 custom-text">
            <Form.Label htmlFor="category">Drink Category</Form.Label>
            <Form.Select id="category" name="category">
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
          <Button className="text-uppercase w-100 btn-custom" variant="custom">
            Search Drinks
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EntryForm;
