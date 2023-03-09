import React from "react";
import styles from "../styles/styles.module.css";

interface ProductCounterProps {
  increaseBy: (value: number) => void;
  counter: number;
}

export const ProductCounter = ({
  increaseBy,
  counter,
}: ProductCounterProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};
