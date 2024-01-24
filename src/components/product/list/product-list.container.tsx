import React, { memo, FC, useState, useEffect } from "react";import ProductList from "./product-list.component.tsx";
import { useProducts } from "../../../products.hook.tsx";

type ProductContainerProps = {};
const ProductListContainer: FC<ProductContainerProps> = () => {
  const { products, loading, error } = useProducts();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error.length === 0 ? (
        <ProductList products={products} />
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};
export default memo(ProductListContainer);
