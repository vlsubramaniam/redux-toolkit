import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersReducer } from './slices/usersSlice';
import { albumsApi, useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
import { photosApi, useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  }, // redux thunk
  middleware: (getDefaultMiddlware) => {
    return getDefaultMiddlware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
  }
});

setupListeners(store.dispatch);

// Async Thunks
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';


// Redux Toolkit Query
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation, useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation };
