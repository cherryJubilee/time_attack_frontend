import { getBrands } from "@/api/brand.api";
import { getProducts } from "@/api/product.api";
import BrandsList from "@/components/BrandsList";

async function BrandPage() {
  const brands = await getBrands();
  const products = await getProducts();

  return (
    <>
      <BrandsList title="Brands" brands={brands} />
    </>
  );
}

export default BrandPage;
