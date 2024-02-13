"use client";
import Page from "@/Page";
import { getProduct } from "@/api/product.api";
import { addItemToCart } from "@/redux/slice/cart.slice";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";

async function ProductPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const dispatch = useAppDispatch();
  const product = await getProduct(productId);
  const handleClickBtn = () => {
    if (product) {
      dispatch(addItemToCart({ product, count: 1 }));
      alert("장바구니에 추가되었습니다");
    }
  };

  return (
    <Page>
      <div className="grid grid-cols-2 gap-x-6 h-screen mx-32 my-20">
        <section className="relative mr-3">
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
          <button
            className="bg-black text-white px-4 py-3 text-sm w-full my-5 lg:hover:scale-110 transition-transform ease-in-out duration-200"
            onClick={handleClickBtn}
          >
            장바구니에 담기
          </button>
        </section>
      </div>
    </Page>
  );
}

export default ProductPage;
