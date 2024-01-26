import React, { memo, FC, useEffect } from "react";import ProductList from "./product-list.component.tsx";
import { useProducts } from "../../../products.hook.tsx";
import ProductCreationContainer from "../../ProductCreationContainer.tsx";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../../store/product/product.selectors.ts";
import { fetchProductsApi } from "../../../services/product-api.service.ts";
import { setProductsAction } from "../../../store/product/product.slice.ts";

const ProductListContainer: FC = () => {
  const { products, loading, error } = useProducts();
  const productList = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchProductsApi();
        dispatch(setProductsAction(response.data));
      } catch (e) {
        console.error(`Something went wrong! Error: ${e}`);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error.length === 0 ? (
        <ProductList products={productList} />
      ) : (
        <div>{error}</div>
      )}
      <ProductCreationContainer />
    </>
  );
};
export default memo(ProductListContainer);
