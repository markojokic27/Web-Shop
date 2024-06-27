import { useContext } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";

function Cart() {
  const { cart } = useContext(FormContext);
  const total = cart.reduce((acc, product) => acc + product.price * product.amount, 0);
  return (
    <div className={classes.cart}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div className={classes.cart__wrapper}>
          <div className={classes.cart__header}>
            <div>
              <h2>Product</h2>
            </div>
            <div>
              <h2>Color</h2>
            </div>
            <div>
              <h2>Price</h2>
            </div>
            <div>
              <h2>Quantity</h2>
            </div>
            <div>
              <h2>Total</h2>
            </div>
          </div>
          <div className={classes.cart__products}>
            {cart.map((product, index) => (
              <div key={index} className={classes.cart__product}>
                <div>
                  <p>{product.name}</p>
                </div>
                <div>
                  <p>{product.color}</p>
                </div>
                <div>
                  <p>€{product.price}</p>
                </div>
                <div>
                  <p>{product.amount}</p>
                </div>
                <div>
                  <p>€{product.price * product.amount}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.cart__total}>
            <h2>Total: €{total}</h2>
          </div>
          <button>PAY</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
