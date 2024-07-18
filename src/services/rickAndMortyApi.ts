import { Character } from '@/types/character';
import { Response } from '@/types/response';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rickAndMortyApi = createApi({
    reducerPath: "rickAndMorty",
    baseQuery: fetchBaseQuery({baseUrl: "https://rickandmortyapi.com/api/"}),
    tagTypes: ["Characters", "SingleCharacter", "MultipleCharacters"],
    endpoints: (builder) => ({
        getAllCharacters: builder.query<Response<Character>, string | void>({
            query: (page = "1") => `character/?page=${page}`,
            providesTags: (_result, _error, page) => [{type: "Characters", id: page ? page : "1"}],
        }),
        getSingleCharacter: builder.query<Character, string>({
            query: (id) => `character/${id}`,
            providesTags: (_result, _error, id) => [{type: "SingleCharacter", id}],
        }),
        getMultipleCharacter: builder.query<Character[], string[]>({
            query: (arr) => `character/${arr.join(",")}`,
            providesTags: (_result, _error, arr) => [{type: "MultipleCharacters", id: arr.join(",")}],
        })
    })
})

export const {useGetAllCharactersQuery, useGetMultipleCharacterQuery, useGetSingleCharacterQuery} = rickAndMortyApi;