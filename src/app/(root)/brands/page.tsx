import { getBrands } from "@/api/brand.api";
import { getProducts } from "@/api/product.api";
import BrandsList from "@/components/BrandsList";
import ProductItemList from "@/components/ProductItemList";

async function BrandPage() {
  const brands = await getBrands();
  const products = await getProducts();

  return (
    <>
      <BrandsList title="Brands" brands={brands} />
      <ProductItemList products={products} />
    </>
  );
}

export default BrandPage;
