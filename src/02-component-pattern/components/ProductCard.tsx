import { useProduct } from "../hooks/useProduct";
import { Provider } from "../context/ProductProvider";
import { ProductCardProps } from "../interfaces/interface";
import styles from "../styles/styles.module.css";

export const ProductCard = ({ product, children }: ProductCardProps) => {
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
