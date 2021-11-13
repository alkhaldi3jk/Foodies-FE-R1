import React from "react";
import { observer } from "mobx-react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

function CategoryItem({ category }) {
  return (
    <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg"
            />
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

    </div>
  );
}

export default observer(CategoryItem);
