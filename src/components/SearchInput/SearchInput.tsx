import * as S from './styles'

export const SearchInput: React.FC = () => {
    return (
      <S.SearchContainer>
        <S.SearchButton>
          <S.IconLupa src={process.env.PUBLIC_URL + "/assets/busca/Lupa/Shape.png"} />
        </S.SearchButton>
        <S.Search>
        </S.Search>
      </S.SearchContainer>
    )
  }