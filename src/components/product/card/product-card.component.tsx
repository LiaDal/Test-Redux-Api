import React, { memo, FC } from "react";import { ProductModel } from "../../../models/product.model";
import { Wrapper, TextWrapper, Image, Title } from "./product-card.style.ts";
import Description from "../Description.tsx";

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
        <Image src={image} alt="Not found" />
        <TextWrapper>
          <Title>{title}</Title>
          <Description text={description!} maxLength={150} />
        </TextWrapper>
        <TextWrapper>
          <div>{price}$</div>
        </TextWrapper>
      </Wrapper>
    </>
  );
};
export default memo(ProductCard);
