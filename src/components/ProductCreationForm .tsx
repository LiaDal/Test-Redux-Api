import React, { FC, FormEvent, useState } from "react";import { ProductModel } from "../models/product.model.ts";
import Input from "./Input/Input.tsx";
import Button from "./Button.tsx";

interface ProductCreationFormProps {
  onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: FC<ProductCreationFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ title, description });
    console.log(title, description);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Button type="submit">Create</Button>
    </form>
  );
};
export default ProductCreationForm;
