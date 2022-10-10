import Axios from "axios";
import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS
} from "./../constants/productsConstants";

export const productsList = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/products");
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_FAILED,
      payload: err.message,
    });
  }
};
export const singleProductAction = (productId) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_REQUEST,
    payload: productId,
  });
  try {
    const { data } = await Axios.get(`/api/product/${productId}`) ;
    
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data,
    }); 
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.messase,
    });
 
  }
};
