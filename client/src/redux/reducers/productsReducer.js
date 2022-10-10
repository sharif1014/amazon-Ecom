import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS
} from "../constants/productsConstants";

const initialProducts = {
  products: [],
  isLoading: false,
  error: null,
};
const initialProduct = {
  product: {},
  isLoading: false,
  error:null
};

export const getProductsReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        isLoading: true,
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        isLoading: false,
        products: action.payload,
      }
    case GET_PRODUCTS_FAILED:
          return {
          isLoading:false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export const getSingleProductReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        isLoading: true,
      }
    case GET_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        product: action.payload,
       
      }
    case GET_PRODUCT_FAILED:
      return {
          isLoading:false,
        error: action.payload,
      }
    default:
      return state;
  }
};
