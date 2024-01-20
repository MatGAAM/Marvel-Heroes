import * as S from './styles'

import React from "react";


export const Card: React.FC = () => {
  return (
    <S.ContainerCard>
      <S.HeroImageContainer>
        aqui vai ter uma foto
      </S.HeroImageContainer>
      <S.WrapperCard>
        <S.NameHero>Star - Lord</S.NameHero>
        <S.FavoriteHeroButton>
          <S.FavoriteHeroIcon />
        </S.FavoriteHeroButton>
      </S.WrapperCard>
    </S.ContainerCard>
  )
}