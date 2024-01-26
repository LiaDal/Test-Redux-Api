import styled from "styled-components";export const ModalContent = styled.div({
  // margin: "auto",
  // width: "50%",
  borderRadius: "2rem",
  position: "relative",
  backgroundColor: "white",
  padding: "2rem",
  opacity: 1,
});

export const ModalWrapper = styled.div({
  // opacity: 0.8,
  padding: "2rem",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ModalHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ModalTitle = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8rem",
  padding: 10,
  margin: "auto",
});
