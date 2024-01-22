import React, { useEffect, useState } from "react";

import * as S from './style'
import { getComics } from '../../Utils/apiUtils'
import { ComicBookCover } from '../../data/heroes'

interface CardComicProps {
	name: string
	resourceURI: string
}

export const CardComic: React.FC<CardComicProps> = ({ name, resourceURI }) => {
	const [comic, setComic] = useState<ComicBookCover | null>(null);

	useEffect(() => {
		getComicsAPI();
	}, [resourceURI]);

	const getComicsAPI = async () => {
		try {
			const response = await getComics(resourceURI);
			setComic(response.thumbnail);
		} catch (error) {
			console.error('Erro ao buscar quadrinho:', error);
		}
	}

  return (
    <S.ContainerCardComic>
			<S.ContainerComicBookCover>
				<S.ComicBookCover src={`${comic?.path}.${comic?.extension}`} />
			</S.ContainerComicBookCover>
			<S.WrapperName>
      	<S.Name>{name}</S.Name>
			</S.WrapperName>
    </S.ContainerCardComic>
  );
}
