import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

function CategoryFilter(props) {
  const { products, setFilteredProducts } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryChange = (category, checked) => {
    if (checked) setSelectedCategories([...selectedCategories, category]);
    else
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };

  useEffect(() => {
    if (!selectedCategories.length) setFilteredProducts(products);
    else {
      const filteredProducts = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setFilteredProducts(filteredProducts);
    }
  }, [selectedCategories]);
  return (
    <div className={classes.categoryFilter__wrapper}>
      <div
        className={classes.categoryFilter}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <h2>Categories</h2>
      </div>
      {isOpen ? (
        <div className={classes.categoryFilter__checkboxes}>
          {categories.map((category, index) => (
            <div key={index} className={classes.filters__checkbox}>
              <input
                type="checkbox"
                id={category}
                name={category}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={(e) =>
                  handleCategoryChange(category, e.target.checked)
                }
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CategoryFilter;
