// - getProducts: 전체 상품 목록을 제공합니다.
//     - path: `/products`
//     - method: `GET`
// - getProduct: 특정 상품의 정보를 제공합니다.
//     - path: `/products/:productId`
//     - method: `GET`

import axios from "axios";

export async function getProducts() {
  const response = await axios.get(
    "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/products"
  );
  return response.data;
}

export async function getProduct(productId: string) {
  const response = await axios.get(
    `https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/products/${productId}`
  );
  return response.data;
}
