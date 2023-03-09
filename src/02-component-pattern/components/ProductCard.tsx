import { ReactElement } from "react";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCounter } from "./ProductCounter";
import { useProduct } from "../hooks/useProduct";
import { Provider } from "../context/ProductProvider";
import styles from "../styles/styles.module.css";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Counter = ProductCounter;
