// SearchForm.tsx
import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

type SearchFormProps = {
  onSearch: (value: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Input
        type="text"
        placeholder="Search..."
        onInputChange={setInputValue}
      />
      <Button onClick={() => onSearch(inputValue)}>Search</Button>
    </div>
  );
};

export default SearchForm;
