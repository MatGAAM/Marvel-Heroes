import * as S from './styled'

import React from 'react'

import { SearchInput } from '../SearchInput/SearchInput'
import { getByName } from '../../Utils/apiUtils'
import { useParams } from 'react-router-dom'




export const DetailPage: React.FC = () => {

  const { heroParamns } = useParams()
  if (heroParamns === undefined) {
    return <div>Nenhum heroi por aqui</div>;
  }
  console.log('heroParamns', typeof heroParamns)
  const heroToDetail = JSON.parse(decodeURIComponent(heroParamns))

  console.log('heroToDetail', heroToDetail)

  const handleSearch = async (searchNameHero: string) => {
    getByName(searchNameHero)
  }
  return (
    <S.MainContainer>
      <S.HeaderContainer>
        <S.LogoMarvel src={process.env.PUBLIC_URL + "/assets/logo/Group.png"}></S.LogoMarvel>
        <S.SearchContainer>
          <SearchInput onSearch={handleSearch}/>
        </S.SearchContainer>

      </S.HeaderContainer>
      <S.BodyContainer>
        <S.WrapperInformations>
          <S.NameHero>{heroToDetail.name}</S.NameHero>
          <S.DescriptionHero>{heroToDetail.description}</S.DescriptionHero>
          
          <S.WrapperMidia>
            <S.ContainerComics>
              <S.TitleComics>Quadrinhos</S.TitleComics>
              <S.WrapperNumberComics>
                <S.ImageComics src={process.env.PUBLIC_URL + "/assets/icones/book/Group.png"}></S.ImageComics>
                <S.NumberComics>
                  {heroToDetail.comics.available}
                </S.NumberComics>
              </S.WrapperNumberComics>
            
            </S.ContainerComics>

            <S.ContainerMovies>
              <S.TitleMovies>Filmes</S.TitleMovies>
              <S.WrapperNumberMovies>
                <S.ImageVideo src={process.env.PUBLIC_URL + "/assets/icones/video/Shape.png"}></S.ImageVideo>
                <S.NumberMovies>
                  {heroToDetail.events.available}
                </S.NumberMovies>
              </S.WrapperNumberMovies>

            </S.ContainerMovies>
          </S.WrapperMidia>
        
        </S.WrapperInformations>
        <S.ImageDiv>
          <S.ImageHero src={`${heroToDetail.thumbnail.path}.${heroToDetail.thumbnail.extension}`}/>
        </S.ImageDiv>
      </S.BodyContainer>
    </S.MainContainer>
  )
}