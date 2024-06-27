import { useState } from "react";
import classes from "./index.module.css";

function SearchFilter(props) {
  const { filteredProducts, setDisplayProducts } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    const displayProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayProducts(displayProducts);
  };
  return (
    <div className={classes.categoryFilter__wrapper}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={classes.categoryFilter}
        />
    </div>
  );
}

export default SearchFilter;
