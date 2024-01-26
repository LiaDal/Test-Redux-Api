import React, { FC } from "react";import { CreateButtonStyle } from "./CreateButton.style.ts";

const CreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <CreateButtonStyle onClick={onClick}>Add</CreateButtonStyle>
    </>
  );
};
export default CreateButton;
