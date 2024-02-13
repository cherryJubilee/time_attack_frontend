import { getProducts } from "@/api/product.api";
import ProductItemList from "@/components/ProductItemList";

async function TrendingProductsPage() {
  const products = await getProducts();
  return <ProductItemList title="Trending" products={products} />;
}

export default TrendingProductsPage;
