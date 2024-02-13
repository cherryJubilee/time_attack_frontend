import { CartItem } from "@/types/CartItem.type";
import { Product } from "@/types/Product.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartStore = {
  items: CartItem[];
};

const initialState: CartStore = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 장바구니에 담기
    addItemToCart(
      state,
      action: PayloadAction<{
        product: Product;
        count: number;
      }>
    ) {
      const existingItem = state.items.find(
        (item) => item.product.result.id === action.payload.product.result.id
      );
      if (existingItem) {
        existingItem.count += action.payload.count;
      } else {
        const newCartItem: CartItem = {
          count: action.payload.count,
          product: action.payload.product,
        };
        state.items.push(newCartItem);
      }
    },
    // 수량 증감  - quentitySelector
    updateQuantity(
      state,
      action: PayloadAction<{ productId: string; count: number }>
    ) {
      const item = state.items.find(
        (item) => item.product.result.id === action.payload.productId
      );
      if (item) {
        item.count = action.payload.count;
      }
    },
    // 상품 차감
    removeItemFromCart() {},
    // 장바구니에서 상품 제거
    clearItemInCart(state) {
      state.items = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addItemToCart,
  updateQuantity,
  removeItemFromCart,
  clearItemInCart,
} = cartSlice.actions;
