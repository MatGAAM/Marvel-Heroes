import React, { useEffect, useState } from "react";
import * as S from './style'
import { getComics } from "../../Utils/apiUtils";
import { format } from 'date-fns'

interface OnSaleDateProps {
    resourceURI: string
}

interface dateOnSale {
    date: string
}

export const OnSaleDate: React.FC<OnSaleDateProps> = ({ resourceURI }) => {
    const [comicDateOnSale, setComic] = useState('');

	useEffect(() => {
		getComicsAPI();
	}, []);

	const getComicsAPI = async () => {
        try {
          const response = await getComics(resourceURI);
          const currentDate = new Date(response.dates[0].date)
          const formattedDate = format(currentDate, 'dd/MMMM/yyyy');
          setComic(formattedDate);
        } catch (error) {
          console.error('Erro ao buscar quadrinho:', error);
        }
      }

    return (
        <S.dateOnSaleText>{comicDateOnSale}</S.dateOnSaleText>
    )
}