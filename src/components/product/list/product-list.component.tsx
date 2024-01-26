import React, { memo, FC, useState, useEffect } from "react";import ProductCard from "../card/product-card.component.tsx";
import { ProductModel } from "../../../models/product.model";

interface ProductListProps {
  products: ProductModel[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <ul>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ul>
    </>
  );
};
export default ProductList;
