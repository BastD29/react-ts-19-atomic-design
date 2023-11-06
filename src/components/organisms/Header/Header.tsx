// Header.tsx
import React from "react";
import SearchForm from "../../molecules/SearchForm/SearchForm";

type HeaderProps = {
  onSearch: (value: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => (
  <header>
    <h1>My Website</h1>
    <SearchForm onSearch={onSearch} />
  </header>
);

export default Header;
