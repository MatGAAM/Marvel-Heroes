import * as S from './styles'
import { SearchInput } from '../SearchInput/SearchInput'
import { ListHeroes } from '../ListHeroes/ListHeroes';

export const BodyPage: React.FC = () => {
  return (
    <S.ContainerBody>
      <SearchInput />
      <ListHeroes />
    </S.ContainerBody>
  )
}