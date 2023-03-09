import React from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  return (
    <img className={styles.productImg} src={img ? img : noImage} alt="imagen" />
  );
};