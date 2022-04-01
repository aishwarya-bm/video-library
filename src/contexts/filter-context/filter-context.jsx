import { useState } from "react";

const { createContext, useContext } = require("react");

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState("all");
  const setCategoryValue = value => setCategory(value);
  return (
    <>
      <FilterContext.Provider value={{ category, setCategoryValue }}>
        {children}
      </FilterContext.Provider>
    </>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
