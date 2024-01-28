import React, { FC, ReactNode } from "react";import { Title } from "../product/card/product-card.style.ts";
import {
  ModalWrapper,
  ModalContent,
  ModalTitle,
  CloseButton,
} from "./Modal.style.ts";

interface ModalProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ title, visible, onClose, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <ModalWrapper onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalTitle>
            <Title>{title}</Title>
            <CloseButton onClick={onClose}>x</CloseButton>
          </ModalTitle>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};
export default Modal;
