import React, { memo, FC } from "react";import { ProductModel } from "../../../models/product.model";
import { Wrapper, TextWrapper, Image, Title } from "./product-card.style.ts";

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({
  title,
  image,
  price,
  description,
}) => {
  return (
    <>
      <Wrapper>
        <Image src={image} alt="img" />
        <TextWrapper>
          <div>{title}</div>
          <p>{description}</p>
        </TextWrapper>
        <TextWrapper>
          <div>{price}$</div>
        </TextWrapper>
      </Wrapper>
    </>
  );
};
export default memo(ProductCard);
