import { GET_TAMPLE_PRODUCTS } from "../types/productTypes";

export const getTopStample = () => (dispatch, getState) => {
  const productItems = getState().product.productItems.slice();
  dispatch({
    type: GET_TAMPLE_PRODUCTS,
    payload: { productItems },
  });
};
