import classes from "./index.module.css";

function SizeSelect(props) {
  const { product, selectedColor, setSelectedSize, selectedSize } = props;

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const sizes = product.colors.find(
    (color) => color.color === selectedColor
  ).sizes;

  return (
    <div className={classes.sizeSelect}>
      <div className={classes.sizeSelect__wrapper}>
        <p>Size:</p>
        <select value={selectedSize} onChange={handleSizeChange}>
          {Object.keys(sizes).map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SizeSelect;
