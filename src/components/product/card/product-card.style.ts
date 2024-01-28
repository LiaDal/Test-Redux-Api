import styled from "styled-components";
import noImage from "../../../assets/icons/noImage.svg";

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  margin: "auto",
  width: "50%",
  borderRadius: "2rem",
  backgroundColor: "white",
  padding: "2rem",
  marginTop: "3rem",
  boxShadow: "1px 2px 9px gray",
});

export const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "2rem",
});

export const Image = styled.img({
  width: "25%",
  objectFit: "contain",
});

export const Title = styled.h2({
  textAlign: "center",
  width: "100%",
});
