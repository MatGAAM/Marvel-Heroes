import React, { useEffect, useState } from "react";
import * as S from './styles'
import { Card } from "../Card/Card";
import { Hero } from "../../data/heroes";


interface ListHeroProps  {
  heroes: Hero[]
  onlyFavorites: () => void
}

export const ListHeroes: React.FC<ListHeroProps> = ({ heroes, onlyFavorites }) => {
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
            <S.ButtonOnlyFavorites onClick={onlyFavorites}>
              <S.FavoriteIcon src={process.env.PUBLIC_URL + "/assets/icones/heart/Path@1,5x.png"}/>
              Somente favoritos
            </S.ButtonOnlyFavorites>
          </S.FavoriteWrapper>

        </S.ContainerOrderAndFavorite>
      </S.ContainerHeaderListHeroes>
      <S.ContainerCard>
        {
          heroes.map((hero) => (
            <Card hero={hero} key={hero.id}/>
          ))
        }
      </S.ContainerCard>
    </S.ContainerListHeroes>
  )
}