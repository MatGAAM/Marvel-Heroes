import styled from "styled-components";

export const ContainerCardComic = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
  background-color: white;

	width: 10rem;
	height: 15rem;
`

export const WrapperName = styled.div`
	max-width: 80%;
	max-height: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	text-overflow: ellipsis;
  margin-bottom: 0.2rem;
  padding-bottom: 0.2rem;
`

export const Name =  styled.h3`
	font-size: 0.80rem;
	flex-wrap: wrap;
`

export const ContainerComicBookCover = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 70%;
	height: 80%;
  &:hover {
    img {
      transform: scale(1.5);
    }
  }
`
export const ComicBookCover = styled.img`
  width: 100%;
	height: 100%;
	object-fit: contain;
  transition: transform 0.4s;

`
export const ButtonFavoriteStyled = styled.div`
	width: 1rem;
	height: 1rem;
	margin-bottom: 0.45rem;
	&:hover {
  	  img {
  	    transform: scale(2);
  	  }
  	}
`