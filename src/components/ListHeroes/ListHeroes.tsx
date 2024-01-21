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

  const [isAscending, setIsAscending] = useState(true);
  const [sortedHeroes, setSortedHeroes] = useState([...heroes]);
  const copyOfHeroes = [...heroes];
  useEffect(() => {
    const sorted = copyOfHeroes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
  
      return isAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
  
    setSortedHeroes(sorted);
  }, [heroes, isAscending]);

  const toggleSortOrder = () => {
    setIsAscending((prevIsAscending) => !prevIsAscending);
    toggleSwitch()
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

            <S.StyledToggleButton active={!isAscending} onClick={toggleSortOrder}>
            <S.Circle active={!isAscending} />
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
          sortedHeroes.map((hero) => (
            <Card hero={hero} key={hero.id}/>
          ))
        }
      </S.ContainerCard>
    </S.ContainerListHeroes>
  )
}