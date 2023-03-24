import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../../service";


const initialState = {
    comments: [],
    comment: null,
}

const addComment=createAsyncThunk(
    "commentSlice/addComment",
    async ({value},{rejectWithValue})=>{
        try{
            const{data}=await commentService.create(value)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const deleteComment = createAsyncThunk(
    "commentSlice/deleteComment",
    async (id, {rejectWithValue}) => {
        try {
            await commentService.deleteById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(addComment.fulfilled,(state, action)=>{
                state.comments.push(action.payload)
            })
            .addCase(deleteComment.fulfilled,(state,action)=>{
                const commentIndex = state.comments.findIndex(value => value.id === action.payload);
                state.comments.splice(commentIndex,1);
            })
})

const {reducer: commentReducer, actions: {}} = commentSlice;

const commentActions = {
    deleteComment,
    addComment,
}
export {commentReducer, commentActions}