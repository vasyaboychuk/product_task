import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {productReducer} from "./slice/product.slice";
import {commentReducer} from "./slice/comment.slice";

const rootReducer=combineReducers({
    productReducer,
    commentReducer
})
const setupStore=()=>configureStore({
    reducer:rootReducer
})

export {setupStore}