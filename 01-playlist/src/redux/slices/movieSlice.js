import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            return state.filter(movie => action.payload !== movie)
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => [])
    }
})


export const {addMovie, removeMovie} = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;