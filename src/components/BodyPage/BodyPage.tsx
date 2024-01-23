import * as S from './styles'
import { SearchInput } from '../SearchInput/SearchInput'
import { ListHeroes } from '../ListHeroes/ListHeroes';

import { Hero } from "../../data/heroes";
import { useEffect, useState } from 'react';
import { getByName, permissionsURL } from '../../Utils/apiUtils';
import axios from 'axios';

import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";



export const BodyPage: React.FC = () => {
  const [heroData, setHeroData] = useState<Hero[]>([])

  const permissions = permissionsURL()

  
  useEffect(() =>{
    getHeroes()
  }, [])
  async function getHeroes() {
    try {
      const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?${permissions}`)

      const heroesData = response.data.data.results

      setHeroData(heroesData)
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  }

  const handleSearch = async (searchNameHero: string) => {
    if (!searchNameHero) {
      getHeroes()
    } else {
      const heroesDataByName = await getByName(searchNameHero)
      setHeroData(heroesDataByName)
    }
  }

  
  const { favoriteHero } = useSelector((rootReducer: RootReducer) => rootReducer.favoriteHeroesReducer)

  const onlyFavorites = () => {
    setHeroData(favoriteHero)
  }
  return (
    <S.ContainerBody>
      <SearchInput onSearch={handleSearch}/>
      <S.ContainerListHeroes>
        <ListHeroes heroes={heroData} onlyFavorites={onlyFavorites}/>
      </S.ContainerListHeroes>
    </S.ContainerBody>
  )
}