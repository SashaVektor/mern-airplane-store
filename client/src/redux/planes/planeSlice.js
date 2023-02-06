import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import planesService from "../services/planesService";

const initialState = {
   plane: null, 
   isError: false, 
   isLoading: false,
   message: '',
   errors: null
}

export const getPlane = createAsyncThunk('GET_PLANE', async (id, thunkAPI) => {
    try{
        return await planesService.getPlane(id);
    } catch(err){
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const createPlane = createAsyncThunk('CREATE_PLANE', async (planeDate, thunkAPI) => {
    try{
        return await planesService.creatPlane(planeDate);
    } catch(err){
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

const planeSlice = createSlice({
    name: 'plane', 
    initialState,
    reducers: {
        resetPlaneErrors: (state) => {
            state.errors = null
        }
    }, extraReducers: (builder) => {
        builder.addCase(getPlane.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPlane.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.plane = actions.payload[0];
        })
        builder.addCase(getPlane.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.plane = null
        })
        builder.addCase(createPlane.pending, (state) => {
            state.isLoading = true
            state.errors = null;
        })
        builder.addCase(createPlane.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.errors = null;
        })
        builder.addCase(createPlane.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errors = action.payload
        })
    }
})

export const {resetPlaneErrors} = planeSlice.actions;


export default planeSlice.reducer