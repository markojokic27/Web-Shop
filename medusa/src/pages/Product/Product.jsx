import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import images from "../../assets/images";
import ColorSelect from "./ColorSelect/ColorSelect";
import SizeSelect from "./SizeSelect/SizeSelect";
import AmountSelect from "./AmountSelect/AmountSelect";

function Product() {
  const { productId } = useParams();
  const { products } = useContext(FormContext);
  const product = products.find((product) => product.id === productId);
  const [selectedColor, setSelectedColor] = useState(
    product ? product.colors[0].color : ""
  );
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedAmount, setSelectedAmount] = useState(1);

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0].color);
      setSelectedSize("S");
      setSelectedAmount(1);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const color = product.colors.find((color) => color.color === selectedColor);
  if (!color) {
    return <div>Color not found</div>;
  }

  const imagePath = images[`${selectedColor}${product.name.replace(/[-]/g, "")}`];
  const amount = color.sizes[selectedSize];

  return (
    <div className={classes.product}>
      <div className={classes.product__wrapper}>
        <div className={classes.product__image}>
          <img src={imagePath} alt={product.name} />
        </div>
        <div className={classes.product__info}>
          <h1>{product.name.replace(/\d/g, "")}</h1>
          <p>{product.description}</p>
          <ColorSelect
            product={product}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <div className={classes.product__selects}>
          {Object.keys(color.sizes).length > 1 && (
            <SizeSelect
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
              product={product}
              selectedColor={selectedColor}
            />
          )}
          <AmountSelect
            maxAmount={amount}
            selectedAmount={selectedAmount}
            setSelectedAmount={setSelectedAmount}
          /></div>
          <p>Available: {amount}</p>
          <h2>Price: €{product.price}</h2>
          <button className={classes.product__button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
