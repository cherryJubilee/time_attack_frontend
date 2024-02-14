export type Product = {
  result: {
    id: string;
    name: string;
    imgSrc: string;
    onlineStock: number;
    price: number;
    originalPrice: number;
    deliveryType: string;
    brand: {
      nameEn: string;
      nameKr: string;
    };
  };
};
