import React from "react";
import { observer } from "mobx-react";
import cateStore from "../../stores/categoryStore";
import CategoryItem from "./CategoryItem";
import { Col, Row } from "react-bootstrap";
import CategoryModal from './CategoryModal'
function CategoryList() {
  const categoryList = cateStore.categories.map((category) => (
    <Col className="list">
   
      <CategoryItem key={category._id} category={category} />
    </Col>
  ));

  return (
    <div>
      <CategoryModal/>
      <Row> {categoryList}</Row>
    </div>
  );
}

export default observer(CategoryList);
