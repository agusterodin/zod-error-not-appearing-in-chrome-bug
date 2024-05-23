'use client'

import { useGetDittoPokemonQuery } from '@/lib/pokemonApi'

export default function DittoPokemon() {
  const { data } = useGetDittoPokemonQuery()

  if (!data) {
    return null
  }

  return <div>{data.height}</div>
}
