import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const AddItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const ClearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const RemoveItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})