import React from "react";
import { observer } from "mobx-react";
import recipeStore from "../../stores/recipeStore";
import RecipeItem from "./RecipeItem";
import { Col, Row } from "react-bootstrap";

function RecipeList() {
  const recipeList = recipeStore.recipes.map((recipe) => (
    <Col className="list">
      <RecipeItem key={recipe._id} category={recipe} />
    </Col>
  ));

  return (
    <div>
      <Row> {recipeList}</Row>
    </div>
  );
}

export default observer(RecipeList);
