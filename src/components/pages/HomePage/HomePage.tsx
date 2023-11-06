import React from "react";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";

const HomePage: React.FC = () => (
  <PageTemplate onSearch={(value) => console.log(value)}>
    <h2>Welcome to the homepage!</h2>
    <p>This is the main content of your home page.</p>
  </PageTemplate>
);

export default HomePage;
