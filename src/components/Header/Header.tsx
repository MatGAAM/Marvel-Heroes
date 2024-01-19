import * as S from './styles'

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.logoMarvel src={process.env.PUBLIC_URL + "/assets/logo/Group.png"}/>
      <S.Title>EXPLORE O UNIVERSO</S.Title>
      <S.Subtitle>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</S.Subtitle>
    </S.Container>
  )
}