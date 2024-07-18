import { rickAndMortyApi } from "@/services/rickAndMortyApi";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
})