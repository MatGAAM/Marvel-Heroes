
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import * as S from './style';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <div>
          <a href="https://www.linkedin.com/in/matheus-gustavo-alves-de-araujo-meneses-10b039158/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/MatGAAM" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
        </div>
        <p>Developed by Matheus Meneses</p>
      </S.Content>
    </S.Container>
  )
}