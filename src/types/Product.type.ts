export type Product = {
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
