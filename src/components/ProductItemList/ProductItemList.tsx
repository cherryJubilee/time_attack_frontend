import { ComponentProps } from "react";
import ProductItem from "../ProductItem";

type ProductItemListProps = {
  title: string;
  products: Array<ComponentProps<typeof ProductItem>["product"]>;
};

function ProductItemListPage({ title, products }: ProductItemListProps) {
  return (
    <section className="mx-16">
      <h3 className="text-2xl font-bold mb-5 text-center mt-14">{title}</h3>
      <ol className="grid grid-cols-4 gap-x-5 gap-y-7">
        {products &&
          products.result.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
      </ol>
    </section>
  );
}

export default ProductItemListPage;
