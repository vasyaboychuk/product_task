import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../service";


const initialState = {
    products: [],
    product: null
}

const getALl = createAsyncThunk(
    'productSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await productService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.value)
        }
    }
);
const getById = createAsyncThunk(
    "productSlice/getById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await productService.getById(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    })

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getALl.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.product = action.payload
            })
})

const {reducer: productReducer, actions: {}} = productSlice;
const productActions = {
    getALl,
    getById
}
export {productActions, productReducer}