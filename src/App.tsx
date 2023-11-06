import React from "react";

import WrappedComponent from "./components/WrappedComponent";
import WrapperComponent from "./components/WrapperComponent";

const App: React.FC = () => {
  return (
    <WrapperComponent className="my-custom-wrapper">
      <WrappedComponent />
    </WrapperComponent>
  );
};

export default App;
