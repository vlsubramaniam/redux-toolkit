import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer, addMovie, removeMovie } from '../slices/movieSlice';
import { songsReducer, addSong, removeSong  } from '../slices/songSlice';
import { reset } from '../actions';


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        songs: songsReducer,

    }
})

export { store };
export {addMovie, removeMovie, addSong, removeSong, reset }