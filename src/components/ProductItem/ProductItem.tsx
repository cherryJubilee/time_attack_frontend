"use client";

import Image from "next/image";
import Link from "next/link";

type ProductItemProps = {
  product: {
    id: string;
    name: string;
    imgSrc: string;
    onlineStock: number;
    price: number;
    originalPrice: number;
    deliveryType: string;
    brand: {
      nameEn: string;
    };
  };
};

function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      <Link
        href={`/products/${product.id}`}
        className="flex flex-col items-left"
      >
        <div className="relative w-52 h-80 mt-4">
          <Image
            src={product.imgSrc}
            alt={product.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="text-xs font-bold	mt-4 mb-2">{product.brand.nameEn}</div>
        <div className="text-xs">{product.name}</div>
        <div>
          <span className="text-xs text-red-500 line-through mr-2 font-bold	">
            ₩{product.originalPrice.toLocaleString("ko-KR")}
          </span>
          <span className="text-xs font-bold	">
            ₩{product.price.toLocaleString("ko-KR")}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
