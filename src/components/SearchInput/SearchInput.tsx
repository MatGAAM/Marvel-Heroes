import { useState } from 'react'
import * as S from './styles'

interface SearchInputProps {
  onSearch: (searchNameHero: string) => void
}


export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchNameHero, setSearchNameHero] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNameHero(event.target.value)
  }

  const handleSearch = () => {
    onSearch(searchNameHero)
  }

  return (
    <S.SearchContainer>
      <S.SearchButton onClick={handleSearch}>
        <S.IconLupa src={process.env.PUBLIC_URL + "/assets/busca/Lupa/Shape.png"} />
      </S.SearchButton>
      <S.Search type="text" value={searchNameHero} onChange={handleInputChange}/>
    </S.SearchContainer>
  )
}