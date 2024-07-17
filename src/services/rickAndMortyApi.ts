import { Character } from '@/types/character';
import { Response } from '@/types/response';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rickAndMortyApi = createApi({
    reducerPath: "rickAndMorty",
    baseQuery: fetchBaseQuery({baseUrl: "https://rickandmortyapi.com/api/"}),
    tagTypes: ["Characters", "SingleCharacter", "MultipleCharacters"],
    endpoints: (builder) => ({
        getAllCharacters: builder.query<Response<Character>, string>({
            query: (page) => `character/?page=${page}`,
            providesTags: (result, error, page) => [{type: "Characters", id: page}],
        }),
        getSingleCharacter: builder.query<Character, string>({
            query: (id) => `character/${id}`,
            providesTags: (result, error, id) => [{type: "SingleCharacter", id}],
        }),
        getMultipleCharacter: builder.query<Character[], string[]>({
            query: (arr) => `character/${arr.join(",")}`,
            providesTags: (result, error, arr) => [{type: "MultipleCharacters", id: arr.join(",")}],
        })
    })
})