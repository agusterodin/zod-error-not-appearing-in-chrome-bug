import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { pokemonApiSlice } from './pokemonApi'

const rootReducer = combineSlices(pokemonApiSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(pokemonApiSlice.middleware)
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
