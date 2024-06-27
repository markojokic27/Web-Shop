import { useContext, useEffect, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import ProductCard from "./ProductCard/ProductCard";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import SearchFilter from "./SearchFilter/SearhFilter";
function Shop() {
  const { products } = useContext(FormContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  useEffect(() => {
    setDisplayProducts(filteredProducts);
  }, [filteredProducts]);
  return (
    <div className={classes.shop}>
      <div className={classes.shop__wrapper}>
        <h1>Medusa shop</h1>
        <div className={classes.shop__filters}>
          <CategoryFilter
            setFilteredProducts={setFilteredProducts}
            products={products}
          />
          <SearchFilter 
            setDisplayProducts={setDisplayProducts} 
            filteredProducts={filteredProducts}
          />
        </div>
        {displayProducts.length === 0 && <h2 className={classes.shop__notFound}>No products found</h2>}
        <div className={classes.shop__products}>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
