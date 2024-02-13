import Page from "@/Page";
import { getProduct } from "@/api/product.api";
import Image from "next/image";

async function ProductPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const product = await getProduct(productId);

  return (
    <Page>
      <div className="flex justify-between my-20 mx-20">
        <section className="relative w-1/2 h-80 mt-4 mr-3">
          <Image
            src={product.result.imgSrc}
            alt={product.result.name}
            fill
            unoptimized
            className="object-cover"
          />
        </section>
        <section className="w-1/2 ml-3">
          <div>
            <span className="font-bold">{product.result.brand.nameKr}</span>
            <span className="mx-1">/</span>
            <span className="font-bold">{product.result.brand.nameEn}</span>
          </div>
          <hr></hr>
          <div>
            <div className="text-sm">{product.result.name} </div>
          </div>
          <div className="flex justify-start my-3 items-center">
            <h4 className="font-bold w-24">정가</h4>
            <div className=" text-red-500 line-through">
              ₩{product.result.originalPrice.toLocaleString("ko-KR")}
            </div>
          </div>
          <div className="flex items-center">
            <h4 className="font-bold w-24  my-3">판매가</h4>
            <div>₩{product.result.price.toLocaleString("ko-KR")}</div>
          </div>
          <div className="flex items-center">
            <h4 className="font-bold w-24  my-3">배송</h4>
            <div>{product.result.deliveryType}</div>
          </div>
          <div className="flex items-center">
            <h4 className="font-bold	w-24  my-3">잔여재고</h4>
            <div>{product.result.onlineStock}</div>
          </div>
          <button className="bg-black text-white px-4 py-2 text-sm w-full">
            장바구니에 담기
          </button>
        </section>
      </div>
    </Page>
  );
}

export default ProductPage;
