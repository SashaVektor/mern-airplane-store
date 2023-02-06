import {configureStore} from '@reduxjs/toolkit';
import planesSlice from './planes/planesSlice';
import planeSlice from './planes/planeSlice';

export const store = configureStore({
    reducer: {
        planesSlice, planeSlice
    }
})