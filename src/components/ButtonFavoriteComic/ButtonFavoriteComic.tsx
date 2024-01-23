import React, { useState } from "react";
import { RootReducer } from "../../redux/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { addComicFavorite, removeComic } from "../../redux/FavoriteComics/favorite-comic-slice";

import * as S from './style'

interface ButtonFavoriteComicProps {
  comic: {
    id: number
    path: string
    extension: string
  }
}

export const ButtonFavoriteComic: React.FC<ButtonFavoriteComicProps> = ({ comic }) => {
  const { favoriteComic } = useSelector((rootReducer: RootReducer) => rootReducer.favoriteComicsReducer)
  const isFavorite = favoriteComic.some((comicChoise) => { return comicChoise.id === comic.id } )
  const [heartIcon, setHeartIcon] = useState(isFavorite ? 'Path Copy 7@2x.png' : 'Path Copy 2@2x.png')

  const dispatch = useDispatch()
  function choiceFavoriteComic() {
    if(isFavorite) {
      setHeartIcon('Path Copy 2@2x.png')
      dispatch(removeComic(comic))
    } else {
      if (favoriteComic.length <= 4) {
        setHeartIcon('Path Copy 7@2x.png')
        dispatch(addComicFavorite(comic))
      } else {
        alert('Numero excedente de favoritos')
      }
    }
  }
  return (
      <S.FavoriteComicButton onClick={choiceFavoriteComic}>
        <S.FavoriteComicIcon src={process.env.PUBLIC_URL + `/assets/icones/heart/${heartIcon}`}/>
      </S.FavoriteComicButton>
  )
}