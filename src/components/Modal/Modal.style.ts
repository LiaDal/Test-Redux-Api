import styled from "styled-components";export const ModalContent = styled.div({
  padding: "2rem",
  backgroundColor: "white",
  position: "relative",
  borderRadius: "8px",
  boxShadow: "0 16px 24px 0 rgba(0, 0, 0, 0.2)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  display: "flex",
  flexDirection: "column",
});

export const ModalWrapper = styled.div({
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(8px)",
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

export const CloseButton = styled.button({
  color: "white",
  backgroundColor: "black",
  "&:hover": {
    background: "#C0C0C0",
  },
  width: 20,
  height: 20,
  borderRadius: 500,
  border: "none",
});
