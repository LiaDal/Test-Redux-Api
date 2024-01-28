import React, { FC, FormEvent, useState } from "react";
import { ProductModel } from "../models/product.model.ts";
import Input from "./Input/Input.tsx";
import Button from "./Button.tsx";
import { FormStyle } from "./Input/Input.ts";

interface ProductCreationFormProps {
  onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: FC<ProductCreationFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ title, description, price });
    console.log(title, description, price + "$");
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Input
        type="number"
        placeholder="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <Button type="submit">Create</Button>
    </FormStyle>
  );
};
export default ProductCreationForm;
