import React from "react";
import { observer } from "mobx-react";
import cateStore from "../../stores/categoryStore";

function CategoryList() {
  const categoryList = cateStore.categories.map((category) => (
    <CateItemItem key={category._id} category={category} />
  ));

  return (
    <div>
     
      {categoryList}
    </div>
  );
}

export default observer(CategoryList);
