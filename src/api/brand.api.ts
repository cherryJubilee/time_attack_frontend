// - **getBrands: 전체 브랜드 목록을 제공합니다.**
//     - path: `/brands`
//     - method: `GET`
// - **getProduct: 특정 브랜드에 대한 정보와 해당 브랜드의 모든 상품 목록을 제공합니다.**
//     - path: `/brands/:brandId`
//     - method: `GET`

import axios from "axios";

export async function getBrands() {
  const response = await axios.get(
    "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/brands"
  );

  return response.data;
}
export async function getProduct(brandId: string) {
  const response = await axios.get(
    `https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/brands/${brandId}`
  );

  return response.data;
}
