import { useContext, useEffect, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import ProductCard from "./ProductCard/ProductCard";
function Shop() {
  const { products } = useContext(FormContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  return (
    <div className={classes.shop}>
      <div className={classes.shop__wrapper}>
        <h1>Shop</h1>
        
        <div className={classes.shop__products}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
