import React, { useState } from "react";
import * as S from './styles'
import { Card } from "../Card/Card";

export const ListHeroes: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  return (
    <S.ContainerListHeroes>
      <S.ContainerHeaderListHeroes>
        <S.NumberHeroes>Encontrados 20 heróis</S.NumberHeroes>
        <S.ContainerOrderAndFavorite>

          <S.ToggleWrapper>
            <S.SpanOrdernedHeroes>
              <S.IconHero src={process.env.PUBLIC_URL + "/assets/icones/heroi/noun_Superhero_2227044.png"}/>
              Ordenar por nome - A/Z
            </S.SpanOrdernedHeroes>

            <S.StyledToggleButton active={isOn} onClick={toggleSwitch}>
            <S.Circle active={isOn} />
            </S.StyledToggleButton>
          </S.ToggleWrapper>

          <S.FavoriteWrapper>
            <S.SpanOnlyFavorites>
              <S.FavoriteIcon src={process.env.PUBLIC_URL + "/assets/icones/heart/Path@1,5x.png"}/>
              Somente favoritos
            </S.SpanOnlyFavorites>
          </S.FavoriteWrapper>

        </S.ContainerOrderAndFavorite>
      </S.ContainerHeaderListHeroes>
      <S.ContainerCard>
        <Card />
        <Card />
        <Card />
        <Card />
      </S.ContainerCard>
    </S.ContainerListHeroes>
  )
}