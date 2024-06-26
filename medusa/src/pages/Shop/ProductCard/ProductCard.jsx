import classes from "./index.module.css";
import images from "../../../assets/images";
import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
  //const randomColorIndex = Math.floor(Math.random() * product.colors.length);
  const color = product.colors[1].color;
  const imagePath = images[`${color}${product.name.replace(/[-]/g, "")}`];

  const displayName = product.name.replace(/\d/g, "");

  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`/${product.id}`);
  };

  return (
    <div
      key={product.id}
      className={classes.productCard}
      onClick={() => {
        navigateToProduct();
      }}
    >
      <div className={classes.productCard__imageContainer}>
        <img
          src={imagePath}
          alt={product.name}
          className={classes.productCard__image}
        />
      </div>
      <h2>{displayName}</h2>
      <div className={classes.productCard__colors}>
        {product.colors.map((color) => (
          <div
            key={color.color}
            className={classes.productCard__color}
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
      <h3>€{product.price}</h3>
    </div>
  );
}

export default ProductCard;
