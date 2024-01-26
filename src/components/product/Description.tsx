import React, { memo, FC, useMemo, useCallback, useState } from "react";import { CustomButton } from "../CustomButton.ts";

type DescriptionProps = { text: string; maxLength?: number };
const MAX_LENGTH = 150;

const Description: FC<DescriptionProps> = ({
  text,
  maxLength = MAX_LENGTH,
}) => {
  const [showFullText, setShowFullText] = useState<boolean>(false);

  const cutText = useMemo(() => {
    if (text.length > maxLength && !showFullText) {
      return text.slice(0, maxLength) + "... ";
    }
    return text + "";
  }, [text, maxLength, showFullText]);

  const showText = useCallback(() => {
    setShowFullText((prevShowFullText) => !prevShowFullText);
  }, []);

  return (
    <>
      {cutText}
      {text.length > maxLength && (
        <CustomButton onClick={showText}>
          {showFullText ? "Hide Details" : "Show Details"}
        </CustomButton>
      )}
    </>
  );
};

export default memo(Description);
