import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import planesService from "../services/planesService";

const initialState = {
   planes: null, 
   isError: false, 
   isLoading: false,
   message: ''
}

export const getPlanes = createAsyncThunk('GET_PLANES', async (_, thunkAPI) => {
    try{
        return await planesService.getPlanes();
    } catch(err){
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

const planesSlice = createSlice({
    name: 'planes', 
    initialState,
    reducers: {

    }, extraReducers: (builder) => {
        builder.addCase(getPlanes.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPlanes.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.planes = actions.payload
        })
        builder.addCase(getPlanes.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.planes = null
        })
    }
})

export const {} = planesSlice.actions

export default planesSlice.reducer