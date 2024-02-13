import axios from "axios";

export async function getBrands() {
  const response = await axios.get(
    "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/brands"
  );

  return response.data;
}
export async function getProduct(brandId: string) {
  const params = brandId;
  const response = await axios.get(
    "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/brands",
    { params }
  );

  return response.data;
}
