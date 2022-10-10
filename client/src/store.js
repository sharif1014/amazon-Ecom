import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from "redux-thunk";
import { getProductsReducer, getSingleProductReducer } from './redux/reducers/productsReducer';

const initialState = {}
const reducer = combineReducers({
    getProductsR: getProductsReducer,
    getAProductR: getSingleProductReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)))

export default store