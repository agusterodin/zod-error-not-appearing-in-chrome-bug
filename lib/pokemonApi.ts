import z from 'zod'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithZodValidation } from './baseQuery'

const PokemonResponseSchema = z.object({ id: z.string(), height: z.number() })
export type PokemonResponse = z.infer<typeof PokemonResponseSchema>

const baseQuery = fetchBaseQuery()

export const pokemonApiSlice = createApi({
  baseQuery: baseQueryWithZodValidation(baseQuery),
  reducerPath: 'pokemonApi',
  endpoints: build => ({
    getDittoPokemon: build.query<PokemonResponse, void>({
      query: () => 'https://pokeapi.co/api/v2/pokemon/ditto',
      extraOptions: {
        responseSchema: PokemonResponseSchema
      }
    })
  })
})

export const { useGetDittoPokemonQuery } = pokemonApiSlice
