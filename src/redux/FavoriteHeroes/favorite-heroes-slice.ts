import { createSlice } from "@reduxjs/toolkit";
import { Hero } from "../../data/heroes";

interface FavoriteHeroesState {
  favoriteHero: Hero[]
}

const initialState: FavoriteHeroesState = {
  favoriteHero: []
}


export const favoriteHeroesSlice = createSlice({
  initialState,
  name: 'favoriteHeroes',
  reducers: {
    addHeroFavorite: (state, action) => {
      state.favoriteHero = [
        ...state.favoriteHero,
        action.payload
      ]
    },
    removeHero: (state, action) => {
      const heroToRemove = action.payload
      const favoriteHeroFiltered = state.favoriteHero.filter((product) => product.id !== heroToRemove.id)

      state.favoriteHero = favoriteHeroFiltered
    }
  }

})


export const { addHeroFavorite, removeHero } = favoriteHeroesSlice.actions