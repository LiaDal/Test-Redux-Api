import React, { FC, ReactNode } from "react";
import { Title } from "../product/card/product-card.style.ts";
import { ModalWrapper, ModalContent, ModalTitle } from "./Modal.style.ts";
import Button from "../Button.tsx";

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
      <ModalWrapper>
        <ModalContent>
          <ModalTitle>
            <Title>{title}</Title>
            <button onClick={onClose}>x</button>
          </ModalTitle>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};
export default Modal;
