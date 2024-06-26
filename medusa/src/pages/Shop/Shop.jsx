import { useContext } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";

function Shop() {
  const { products } = useContext(FormContext);
  console.log(products);
  return (
    <div className={classes.shop}>
      <h1>Shop</h1>
      <div className={classes.products}>
        {products.map((product) => (
          <div key={product.id} className={classes.product}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}</div> 

    </div>
  )
}

export default Shop;