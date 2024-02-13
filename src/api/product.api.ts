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
