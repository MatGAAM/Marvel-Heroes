import { createSlice } from "@reduxjs/toolkit";
import { FavoriteComic } from "../../data/heroes";

interface FavoriteComicState {
  favoriteComic: FavoriteComic[]
}

const initialState: FavoriteComicState = {
  favoriteComic: []
}


export const favoriteComicsSlice = createSlice({
  initialState,
  name: 'favoriteComics',
  reducers: {
    addComicFavorite: (state, action) => {
      state.favoriteComic = [
        ...state.favoriteComic,
        action.payload
      ]
    },
    removeComic: (state, action) => {
      const comicToRemove = action.payload
      const favoriteComicsFiltered = state.favoriteComic.filter((product) => product.id !== comicToRemove.id)

      state.favoriteComic = favoriteComicsFiltered
    }
  }

})


export const { addComicFavorite, removeComic } = favoriteComicsSlice.actions