import { useDispatch } from 'react-redux';
import { removeHero, addHeroFavorite } from '../../redux/FavoriteHeroes/favorite-heroes-slice'
import { Hero } from '../../data/heroes';
import * as S from './styles'

import React, { useState } from "react";

interface HeroCardProps {
  hero: Hero
}

export const Card: React.FC<HeroCardProps> = ({ hero }) => {

  const [heartIcon, setHeartIcon] = useState('Path Copy 2@2x.png')

  const dispatch = useDispatch()

  function favoriteHero() {
    console.log('clicou', heartIcon)
    if(heartIcon === 'Path Copy 2@2x.png') {
      setHeartIcon('Path Copy 7@2x.png') 
      dispatch(addHeroFavorite(hero))
    } else {
      dispatch(removeHero(hero))
      setHeartIcon('Path Copy 2@2x.png')
    } 
    console.log('saiu', heartIcon)
  }
  return (
    <S.ContainerCard>
      <S.HeroImageContainer>
        <S.HeroImage src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
      </S.HeroImageContainer>
      <S.WrapperCard>
        <S.NameHero>{hero.name}</S.NameHero>
        <S.FavoriteHeroButton onClick={favoriteHero}>
          <S.FavoriteHeroIcon src={process.env.PUBLIC_URL + `/assets/icones/heart/${heartIcon}`}/>
        </S.FavoriteHeroButton>
      </S.WrapperCard>
    </S.ContainerCard>
  )
}

