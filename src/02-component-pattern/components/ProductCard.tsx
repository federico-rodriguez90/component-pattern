import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import styles from "../styles/styles.module.css";
import { ProductCounter } from "./ProductCounter";
import { useProduct } from "../hooks/useProduct";

interface Props {
  product: Product;
}
interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductCounter counter={counter} increaseBy={increaseBy} />
    </div>
  );
};
