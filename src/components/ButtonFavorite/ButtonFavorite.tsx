import React, { useState } from 'react'
import { RootReducer } from '../../redux/root-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { addHeroFavorite, removeHero } from '../../redux/FavoriteHeroes/favorite-heroes-slice'
import { Hero } from '../../data/heroes'

import * as S from './styled'

interface ButtonFavoriteProps {
  hero: Hero
}

export const ButtonFavorite: React.FC<ButtonFavoriteProps> = ({ hero }) => {
  const { favoriteHero } = useSelector((rootReducer: RootReducer) => rootReducer.favoriteHeroesReducer)
  const isFavorite = favoriteHero.some((characterChoice) => { return characterChoice.id === hero.id } )
  const [heartIcon, setHeartIcon] = useState(isFavorite ? 'Path Copy 7@2x.png' : 'Path Copy 2@2x.png')

  const dispatch = useDispatch()
  function choiceFavoriteHero() {
    if(isFavorite) {
      setHeartIcon('Path Copy 2@2x.png')
      dispatch(removeHero(hero))
    } else {
      if (favoriteHero.length <= 4) {
        setHeartIcon('Path Copy 7@2x.png')
        dispatch(addHeroFavorite(hero))
      } else {
        alert('Limite de favoritos atingido')
      }
    }
  }
  return (
      <S.FavoriteHeroButton onClick={choiceFavoriteHero}>
        <S.FavoriteHeroIcon src={process.env.PUBLIC_URL + `/assets/icones/heart/${heartIcon}`}/>
      </S.FavoriteHeroButton>
  )
}