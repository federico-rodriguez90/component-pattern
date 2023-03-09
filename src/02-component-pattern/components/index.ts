import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductImage } from "./ProductImage";
import { ProductCounter } from "./ProductCounter";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interface";

export { ProductImage } from "./ProductImage";
export { ProductCounter } from "./ProductCounter";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Counter: ProductCounter,
  Image: ProductImage,
});

export default ProductCard;
