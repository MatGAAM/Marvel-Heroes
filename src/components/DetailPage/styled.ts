import styled from "styled-components";
import { Link } from 'react-router-dom'


export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
`


export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #e7f6e7;
`


export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`


export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  left: -5%;
  transform: translateX(5%);
` 
export const LogoMarvel = styled.img`
  width: 14rem;
  height: 5rem;
  position: relative;

`

export const WrapperInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 430px;
`

export const WrapperHeaderInformations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`
export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonFavoriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  &:hover {
    img {
      transform: scale(1.5);
    }
  }
`

export const NameHero = styled.h1`
  color: #404040;
`
export const DescriptionHero = styled.h2`
  color: #8c8c8c;
  font-size: 1rem;
  font-weight: 500;
`


export const WrapperMidia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0 ;
  width: 100%;
`
export const ContainerMovies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  height: 5rem;
  margin-right: 6rem;
`
export const WrapperNumberMovies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`

export const TitleMovies = styled.h3`
  font-size: 0.85rem;
`
export const NumberMovies = styled.h3`
`

export const ContainerComics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  height: 5rem;
`
export const ImageVideo = styled.img``
export const ImageComics = styled.img``

export const WrapperNumberComics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`
export const TitleComics = styled.h3`
  font-size: 0.85rem;
`
export const NumberComics = styled.h3``

export const WrapperRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.6rem 0 ;
`

export const WrapperOnSaleDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.6rem 0 ;
  gap: 1rem;
`

export const RatingText = styled.h3`
  font-size: 0.85rem;
`

export const ImageDiv = styled.div`
  width: 35rem;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8%;
  `
export const ImageHero = styled.img`
  min-width: 100%;
  min-height: 100%;
  border-radius: 350px;
  object-fit: contain;
`

export const ComicsListContainer = styled.div`
  margin-top: 15rem;
  margin-bottom: 25rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`

export const WrapperComicsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  flex-wrap: wrap;
  gap: 3rem;

  margin-top: 5rem;
  margin-bottom: 5rem;
`
export const WrapperTitleComicsList = styled.div`
  width: 100%;
`
export const TitleComicsList = styled.h3`

`

export const WrapperBodySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

