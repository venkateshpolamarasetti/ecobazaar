import React from "react";
import FormBuilder from "../form/FormBuilder";
import { searchFormConfig } from "../../forms/formConfig";

const SearchBar = () => {
  return (
    <div>
      <FormBuilder
        config={searchFormConfig}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
};

export default SearchBar;
