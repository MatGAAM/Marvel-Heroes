import * as S from './styled'

import React, { useState } from 'react'

import { SearchInput } from '../SearchInput/SearchInput'
import { getByName } from '../../Utils/apiUtils'
import { useParams } from 'react-router-dom'
import { CardComic } from '../CardComic/CardComic'
import { ButtonFavorite } from '../ButtonFavorite/ButtonFavorite'
import { OnSaleDate } from '../OnSaleDate/OnSaleDate'
import { Footer } from '../Footer/Footer'
import { Hero } from '../../data/heroes'


interface Comic {
  id: number;
  name: string;
  resourceURI: string;
}


export const DetailPage: React.FC = () => {

  const [heroData , setHeroData] = useState<Hero[]>()
  const { heroParamns } = useParams()
  if (heroParamns === undefined) {
    return <div>Nenhum heroi por aqui</div>;
  }
  const heroToDetail = heroData || JSON.parse(decodeURIComponent(heroParamns)) 

  const hero = {...heroToDetail}

  const firstTenComics = hero.comics.items.slice(0, 10);

  const handleSearch = async (searchNameHero: string) => {
    getByName(searchNameHero)
    const heroesDataByName = await getByName(searchNameHero)
    setHeroData(heroesDataByName)
  }
  return (
    <>
    <S.MainContainer>
      <S.HeaderContainer>
        <S.ContainerLogo>
          <S.StyledLink to={'/'}>
            <S.LogoMarvel src={process.env.PUBLIC_URL + "/assets/logo/Group.png"}></S.LogoMarvel>
          </S.StyledLink>
        </S.ContainerLogo>

      </S.HeaderContainer>
      <S.BodyContainer>
        <S.WrapperBodySection>

          <S.WrapperInformations>
            <S.WrapperHeaderInformations>
              <S.NameContainer>
                <S.NameHero>{heroToDetail.name}</S.NameHero>
              </S.NameContainer>
              <S.ButtonFavoriteContainer>
                <ButtonFavorite hero={heroToDetail}/>
              </S.ButtonFavoriteContainer>
            </S.WrapperHeaderInformations>
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

            <S.WrapperOnSaleDate>
              <S.RatingText>Ultimo quadrinho lançado:</S.RatingText>
              <OnSaleDate resourceURI={firstTenComics[0].resourceURI} />
            </S.WrapperOnSaleDate>
          
          </S.WrapperInformations>
          <S.ImageDiv>
            <S.ImageHero src={`${heroToDetail.thumbnail.path}.${heroToDetail.thumbnail.extension}`}/>
          </S.ImageDiv>
        </S.WrapperBodySection>

        <S.ComicsListContainer>
          <S.WrapperTitleComicsList>
            <S.TitleComicsList>Ultimos Lançamentos</S.TitleComicsList>
          </S.WrapperTitleComicsList>
          <S.WrapperComicsList>
            {
              firstTenComics.map((comic: Comic) => (
                <CardComic name={comic.name} resourceURI={comic.resourceURI}/>
              ))
            }
          </S.WrapperComicsList>
        </S.ComicsListContainer>
      </S.BodyContainer>

    </S.MainContainer>
    <Footer />
    </>
  )
}