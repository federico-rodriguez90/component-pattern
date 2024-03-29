import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductCounter,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title={"Cafe"} />
          <ProductCard.Counter />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle />
          <ProductCounter />
        </ProductCard>
      </div>
    </div>
  );
};
