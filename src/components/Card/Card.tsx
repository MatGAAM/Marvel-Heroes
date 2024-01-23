import { Hero } from '../../data/heroes';
import * as S from './styles'

import React from "react";
import { ButtonFavorite } from '../ButtonFavorite/ButtonFavorite';

interface HeroCardProps {
  hero: Hero
}

export const Card: React.FC<HeroCardProps> = ({ hero }) => {

  
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
        <S.ButtonFavoriteStyled>
          <ButtonFavorite hero={hero}/>
        </S.ButtonFavoriteStyled>
      </S.WrapperCard>
    </S.ContainerCard>
  )
}

