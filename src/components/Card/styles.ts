import styled from "styled-components";
import { Link } from 'react-router-dom'


export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  max-width: 16rem;
  height: 19rem;
  background-color: #ff1510;

  object-fit: contain;

`
export const WrapperCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 0;
  padding:0.5rem 0;


  background-color: #fff;
`

export const HeroImage = styled.img`
  width: 16rem;
  height: 16.5rem;
  object-fit: cover;

`
export const HeroImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  
`

export const NameHero = styled.span`
  font-weight: 700;
  color: #404040;
`
export const FavoriteHeroButton = styled.button`
  background-color: transparent;
  border: none;

  width: 1rem;
  height: 1rem;
`
export const FavoriteHeroIcon = styled.img`
  width: 100%;
  height: 100%;
`