// PageTemplate.tsx
import React from "react";
import Header from "../../organisms/Header/Header";

type PageTemplateProps = {
  children: React.ReactNode;
  onSearch: (value: string) => void;
};

const PageTemplate: React.FC<PageTemplateProps> = ({ children, onSearch }) => (
  <div>
    <Header onSearch={onSearch} />
    <main>{children}</main>
  </div>
);

export default PageTemplate;
