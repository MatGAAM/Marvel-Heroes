import { combineReducers } from "redux"
import { favoriteHeroesSlice } from "./FavoriteHeroes/favorite-heroes-slice"

export const rootReducer = combineReducers({
  favoriteHeroesReducer: favoriteHeroesSlice.reducer
})


export type RootReducer =  ReturnType<typeof rootReducer>