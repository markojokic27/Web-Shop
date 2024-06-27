import classes from "./index.module.css";

function ColorSelect(props) {
  return (
    <div className={classes.colorSelect__colors}>
      {props.product.colors.map((color) => (
        <div
          key={color.color}
          className={classes.colorSelect__color}
          style={{ backgroundColor: color.color }}
          onClick={() => props.setSelectedColor(color.color)}
        >
          {color.color === props.selectedColor && (
            <div className={classes.colorSelect__selectedColor}></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ColorSelect;
