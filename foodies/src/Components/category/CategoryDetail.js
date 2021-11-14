import React, { useState } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router";
import categoryStore from "../../stores/categoryStore";

function CategoryDetail() {
  const { categorySlug } = useParams();
  const CategoryDetail = categoryStore.categories.find(
    (category) => category.slug === categorySlug
  );

  return (
    <div>
      {CategoryDetail}
    </div>
  );
}

export default observer(CategoryDetail);