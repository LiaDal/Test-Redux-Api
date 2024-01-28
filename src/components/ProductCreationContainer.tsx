import React, { FC, useState, useEffect } from "react";
import CreateButton from "./CreateButton/CreateButton.tsx";
import Modal from "./Modal/Modal.tsx";
import ProductCreationForm from "./ProductCreationForm .tsx";
import { createProductApi } from "../services/product-api.service.ts";
import { ProductModel } from "../models/product.model.ts";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../store/product/product.selectors.ts";
import { setProductsAction } from "../store/product/product.slice.ts";

const ProductCreationContainer: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState();
  const productList = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleCreateButtonClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = async (product: Partial<ProductModel>) => {
    try {
      const response = await createProductApi(product);
      dispatch(setProductsAction([response.data, ...productList]));
      handleModalClose();
    } catch (error) {
      console.error("Error creating product:", error);
      handleModalClose();
    }
  };

  return (
    <>
      <CreateButton onClick={handleCreateButtonClick} />
      <Modal
        title="Create Product"
        visible={modalVisible}
        onClose={handleModalClose}
      >
        <ProductCreationForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default ProductCreationContainer;
