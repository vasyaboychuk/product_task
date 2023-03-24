import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {productReducer} from "./slice/product.slice";

const rootReducer=combineReducers({
    productReducer
})
const setupStore=()=>configureStore({
    reducer:rootReducer
})

export {setupStore}