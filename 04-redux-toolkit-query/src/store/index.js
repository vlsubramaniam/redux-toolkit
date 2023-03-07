import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersReducer } from './slices/usersSlice';
import { albumsApi, useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer
  }, // redux thunk
  middleware: (getDefaultMiddlware) => {
    return getDefaultMiddlware()
      .concat(albumsApi.middleware)
  }
});

setupListeners(store.dispatch);

// Async Thunks
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';


// Redux Toolkit Query
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation };
