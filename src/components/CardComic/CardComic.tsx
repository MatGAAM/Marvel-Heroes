import React, { useEffect, useState } from "react";

import * as S from './style'
import { getComics } from '../../Utils/apiUtils'
import { ButtonFavoriteComic } from "../ButtonFavoriteComic/ButtonFavoriteComic";

interface CardComicProps {
  name: string
  resourceURI: string
}

interface Comic {
  id: number
  path: string
  extension: string
}

export const CardComic: React.FC<CardComicProps> = ({ name, resourceURI }) => {
  const [comic, setComic] = useState<Comic>();

  useEffect(() => {
    getComicsAPI();
  }, [resourceURI]);

  const getComicsAPI = async () => {
    try {
      const response = await getComics(resourceURI);
      const filteredResponse = { id: response?.id, path: response?.thumbnail.path, extension: response?.thumbnail.extension }
      setComic(filteredResponse);
    } catch (error) {
      console.error('Erro ao buscar quadrinho:', error);
    }
  }

  return (
    <S.ContainerCardComic>
      <S.ContainerComicBookCover>
        {comic && <S.ComicBookCover src={`${comic.path}.${comic.extension}`} />}
      </S.ContainerComicBookCover>
      <S.WrapperName>
        <S.Name>{name}</S.Name>
      </S.WrapperName>
      <S.ButtonFavoriteStyled>
        {comic &&  <ButtonFavoriteComic comic={comic} />}
      </S.ButtonFavoriteStyled>
    </S.ContainerCardComic>
  );
}