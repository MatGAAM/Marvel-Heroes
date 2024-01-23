import { combineReducers } from "redux"
import { favoriteHeroesSlice } from "./FavoriteHeroes/favorite-heroes-slice"
import { favoriteComicsSlice } from "./FavoriteComics/favorite-comic-slice"

export const rootReducer = combineReducers({
  favoriteHeroesReducer: favoriteHeroesSlice.reducer,
  favoriteComicsReducer: favoriteComicsSlice.reducer
})


export type RootReducer =  ReturnType<typeof rootReducer>