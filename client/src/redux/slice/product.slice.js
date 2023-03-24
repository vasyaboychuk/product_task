import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../service";


const initialState = {
    products: [],
    product: null,
    productForUpdate:null
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
const addProduct=createAsyncThunk(
    "productSlice/addProduct",
    async ({value},{rejectWithValue})=>{
        try{
            const{data}=await productService.create(value)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const deleteProduct = createAsyncThunk(
    "productSlice/deleteProduct",
    async (id, {rejectWithValue}) => {
        try {
            await productService.deleteById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const updateById=createAsyncThunk(
    'productSlice/updateById',
    async ({product,id},{rejectWithValue})=>{
        try {
            const {data} = await productService.updateById(id, product);
            return data
        } catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProductForUpdate:(state, action)=>{
            state.productForUpdate=action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getALl.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.product = action.payload
            })
            .addCase(addProduct.fulfilled,(state, action)=>{
                state.products.push(action.payload)
            })
            .addCase(deleteProduct.fulfilled,(state,action)=>{
                const productIndex = state.products.findIndex(value => value.id === action.payload);
                state.products.splice(productIndex,1);
            })
            .addCase(updateById.fulfilled,(state,action)=>{
                const findProduct= state.product.find(value=>value.id===action.payload.id )
                Object.assign(findProduct,action.payload)
            })
})

const {reducer: productReducer, actions: {setProductForUpdate}} = productSlice;
const productActions = {
    getALl,
    getById,
    deleteProduct,
    addProduct,
    setProductForUpdate,
    updateById
}
export {productActions, productReducer}