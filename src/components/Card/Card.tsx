import { useDispatch, useSelector } from 'react-redux';
import { removeHero, addHeroFavorite } from '../../redux/FavoriteHeroes/favorite-heroes-slice'
import { Hero } from '../../data/heroes';
import * as S from './styles'

import React, { useState } from "react";
import { RootReducer } from '../../redux/root-reducer';

interface HeroCardProps {
  hero: Hero
}

export const Card: React.FC<HeroCardProps> = ({ hero }) => {

  const { favoriteHero } = useSelector((rootReducer: RootReducer) => rootReducer.favoriteHeroesReducer)
  const isFavorite = favoriteHero.some((characterChoice) => { return characterChoice.id === hero.id } )
  console.log(isFavorite)
  const [heartIcon, setHeartIcon] = useState(isFavorite ? 'Path Copy 7@2x.png' : 'Path Copy 2@2x.png')

  const dispatch = useDispatch()
  function choiceFavoriteHero() {
    if(isFavorite) {
      setHeartIcon('Path Copy 2@2x.png')
      dispatch(removeHero(hero))
    } else {
      setHeartIcon('Path Copy 7@2x.png')
      dispatch(addHeroFavorite(hero))
    }
  }
  const heroParamns = {...hero}
  return (
    <S.ContainerCard>
      <S.HeroImageContainer>
        
        <S.HeroImage src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}>
        </S.HeroImage>
      </S.HeroImageContainer>
      <S.WrapperCard>
        <S.StyledLink to={`/detail-page/${encodeURIComponent(JSON.stringify(heroParamns))}`}>
          <S.NameHero>{hero.name}</S.NameHero>
        </S.StyledLink>
        <S.FavoriteHeroButton onClick={choiceFavoriteHero}>
          <S.FavoriteHeroIcon src={process.env.PUBLIC_URL + `/assets/icones/heart/${heartIcon}`}/>
        </S.FavoriteHeroButton>
      </S.WrapperCard>
    </S.ContainerCard>
  )
}

