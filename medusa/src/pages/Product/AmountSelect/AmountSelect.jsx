import React from "react";
import classes from "./index.module.css";

function AmountSelect(props) {
  const { maxAmount, selectedAmount, setSelectedAmount } = props;

  const handleAmountChange = (event) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= maxAmount) {
      setSelectedAmount(value);
    }
  };

  return (
    <div className={classes.amountSelect}>
      <p>Amount:</p>
      <input
        type="number"
        id="amount"
        min="1"
        max={maxAmount}
        value={selectedAmount}
        onChange={handleAmountChange}
      />
    </div>
  );
}

export default AmountSelect;
