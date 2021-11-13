import React from "react";
import { observer } from "mobx-react";
import cateStore from "../../stores/categoryStore";

function CategoryItem({category}) {
  return <div>
      <h2>{category.name}</h2>
  </div>;
}

export default observer(CategoryItem);
