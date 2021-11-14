import { React } from "react";
import { observer } from "mobx-react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top"  src={category.image}  />
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={`/category/${category.slug}/recipes`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default observer(CategoryItem);
