import React, { ReactElement } from "react";

type BorderWrapperProps = {
  children: ReactElement | ReactElement[];
};

const BorderWrapper: React.FC<BorderWrapperProps> = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        return (
          <div style={{ border: "1px solid black", padding: "10px" }}>
            {child}
          </div>
        );
      })}
    </>
  );
};

export default BorderWrapper;
