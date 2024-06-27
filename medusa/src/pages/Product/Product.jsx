import { useParams } from "react-router-dom";
import classes from "./index.module.css";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/formContext";
import images from "../../assets/images";
import ColorSelect from "./ColorSelect/ColorSelect";
import SizeSelect from "./SizeSelect/SizeSelect";

function Product() {
  const { productId } = useParams();
  const { products } = useContext(FormContext);
  const product = products.find((product) => product.id === productId);
  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('S');

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0].color);
      setSelectedSize('S');
    }
  }, [product]);
  
  const color = product.colors.find((color) => color.color === selectedColor);
  const amount = color.sizes[selectedSize];

  const imagePath = images[`${selectedColor}${product.name.replace(/[-]/g, "")}`];
  

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
          {Object.keys(color.sizes).length > 1 && (
            <SizeSelect
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
              product={product}
              selectedColor={selectedColor}
            />
          )}
          <p>Available: {amount}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
