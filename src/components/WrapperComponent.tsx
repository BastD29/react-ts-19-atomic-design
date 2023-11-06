import React, { ReactNode } from "react";

type WrapperComponentProps = {
  children: ReactNode;
  className?: string;
};

const WrapperComponent: React.FC<WrapperComponentProps> = ({ children }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>
  );
};

export default WrapperComponent;
