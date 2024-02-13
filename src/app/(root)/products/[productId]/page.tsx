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
      <div className="grid grid-cols-2 gap-x-6 h-screen mx-32 my-20">
        <section className="relative mt-4 mr-3">
          <Image
            src={product.result.imgSrc}
            alt={product.result.name}
            fill
            unoptimized
            className="object-cover"
          />
        </section>
        <section className="ml-3">
          <div className="my-2">
            <span className="font-bold">{product.result.brand.nameKr}</span>
            <span className="mx-1">/</span>
            <span className="font-bold">{product.result.brand.nameEn}</span>
          </div>
          <hr></hr>
          <div>
            <div className="my-2">{product.result.name} </div>
          </div>
          <div className="flex justify-start my-5 items-center">
            <h4 className="font-bold w-24">정가</h4>
            <div className=" text-red-500 line-through">
              ₩{product.result.originalPrice.toLocaleString("ko-KR")}
            </div>
          </div>
          <div className="flex items-center">
            <h4 className="font-bold w-24  my-5">판매가</h4>
            <div>₩{product.result.price.toLocaleString("ko-KR")}</div>
          </div>
          <div className="flex items-center">
            <h4 className="font-bold w-24  my-5">배송</h4>
            <div>{product.result.deliveryType}</div>
          </div>
          <div className="flex items-center">
            <h4 className="font-bold	w-24  my-5">잔여재고</h4>
            <div>{product.result.onlineStock}</div>
          </div>
          <button className="bg-black text-white px-4 py-3 text-sm w-full my-5">
            장바구니에 담기
          </button>
        </section>
      </div>
    </Page>
  );
}

export default ProductPage;
