import React from "react";
import { CustomButtonContainer } from "./custom-button.styled";

const CustomButton = ({children, ...props}) => {
  return (
    <CustomButtonContainer className="custom-button"{...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
