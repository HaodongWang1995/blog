import React, { FC } from "react";

interface ButtonProps {
    label: string,

  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({label,...props}) => {
  return <div >
    <button
      {...props}
      > {label}</button>
  </div>;
};

export default Button;