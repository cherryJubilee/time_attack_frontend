import { getBrand } from "@/api/brand.api";
import Page from "@/Page";

async function BrandPage({
  params: { brandId },
}: {
  params: { brandId: string };
}) {
  const brand = await getBrand(brandId);

  return <Page>브랜드 별 페이지</Page>;
}

export default BrandPage;
