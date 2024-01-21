import styled from "styled-components";

export const SearchContainer = styled.div`
  max-width: 1240px;
	display: flex;
	align-items: center;
	
	height: 3rem;
`

export const Search = styled.input.attrs({
	placeholder:'Procure por heróis'
})`
	height: 100%;
	width: 40rem;
	min-width: 20rem;

	border: none;
	border-bottom-right-radius: 30px;
	border-top-right-radius: 30px;

	background-color: #fdecec;
	color: #ff1510;

	&::placeholder{
		color:#ff1510;
	}

	&:focus {
		outline: none;
	}
`

export const SearchButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 4rem;

	border-bottom-left-radius: 30px;
	border-top-left-radius: 30px;
	border: none;

	background-color: #fdecec;

	cursor: pointer;

`

export const IconLupa = styled.img``