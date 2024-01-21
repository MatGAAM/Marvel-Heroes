import styled from "styled-components";

interface ToogleProps {
    active: boolean
  }

export const NumberHeroes = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: #b9b9b9;
`
export const ContainerListHeroes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1240px;
`
export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  flex-wrap: wrap;
  gap: 4.3rem;
`

export const ContainerHeaderListHeroes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const SpanOrdernedHeroes = styled.span`
  color: #ff1510;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.70rem;
  margin: 1rem auto;
`

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledToggleButton = styled.button<ToogleProps>`
  display: flex;
  position: relative;
  width: 4.4rem;
  height: 1.95rem;
  margin: auto 1.3rem;

  background-color: #E4E5E9;
  
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

export const Circle = styled.div<ToogleProps>`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  background-color: #FF0000;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
  border-radius: 50%;
  transition: transform 0.5s ease;
  left: ${({ active }) => (active ? 'calc(100% - 14px)' : '14px')};
`;

export const IconHero = styled.img``
export const FavoriteIcon = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  object-fit: contain;
  margin-right: 0.75rem;
`

export const FavoriteWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 1.95rem;
`;
export const ContainerOrderAndFavorite = styled.div`
  display: flex;
  align-items: center;
  width: 33rem;
`
export const ButtonOnlyFavorites = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ff1510;
  background-color: transparent;

  border: none;
  width: 100%;
  height: 100%;

  cursor: pointer;
`