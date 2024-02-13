"use client";
import Page from "@/Page";
import QuantitySelector from "@/components/QuantitySelector";
import { updateQuantity } from "@/redux/slice/cart.slice";
import { RootState, useAppDispatch } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

function CartPage() {
  // 리덕스에 저장되어있는 상품 정보 가져와야돼
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const handleQuantityUpdate = (productId: string, newCount: number) => {
    dispatch(updateQuantity({ productId, count: newCount }));
  };

  return (
    <Page>
      <h3 className="text-3xl font-bold mb-5 text-center mt-28">장바구니</h3>
      <ul className="mx-20 my-12">
        {cartItems.map((item) => (
          <li
            key={item.product.result.id}
            className="border-y-2	flex justify-between pt-4 pb-4"
          >
            <section className="relative w-36 h-36  mr-8">
              <Image
                src={item.product.result.imgSrc}
                alt={item.product.result.name}
                fill
                unoptimized
                className="object-cover"
              />
            </section>

            <section className="flex flex-col justify-around">
              <div>
                <span className="font-bold">
                  {item.product.result.brand.nameKr}
                </span>
                <span className="mx-1">/</span>
                <span className="font-bold">
                  {item.product.result.brand.nameEn}
                </span>
              </div>
              <div>{item.product.result.name}</div>

              <div>
                <span className=" text-red-500 line-through mr-3">
                  ₩{item.product.result.originalPrice.toLocaleString("ko-KR")}
                </span>
                <span className="font-bold w-24  my-5">
                  ₩{item.product.result.price.toLocaleString("ko-KR")}
                </span>
              </div>
              <div>
                <span className="text-sm">
                  {item.product.result.deliveryType}
                </span>
                <span className="text-xs mx-1">|</span>
                <span className="text-sm">잔여재고</span>
                <span className="text-sm ml-1">
                  {item.product.result.onlineStock}ea
                </span>
              </div>
            </section>

            <section className="flex">
              <QuantitySelector
                count={item.count}
                setCount={(newCount) =>
                  handleQuantityUpdate(item.product.result.id, newCount)
                }
              />
            </section>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default CartPage;
