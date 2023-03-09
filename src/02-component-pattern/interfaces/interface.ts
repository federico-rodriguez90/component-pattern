import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Counter: () => JSX.Element;
}
