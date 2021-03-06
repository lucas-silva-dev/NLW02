import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Wrapper,
  ButtonsContainer,
  LandingContainer,
  LogoContainer,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Wrapper>
      <LandingContainer>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img src={landingImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <Link to="/study">
            <img src={studyIcon} alt="estudar" />
            Estudar
          </Link>

          <Link to="/give-classes">
            <img src={giveClassesIcon} alt="Ensinar" />
            Dar aulas
          </Link>
        </ButtonsContainer>

        <span>
          Total de 200 conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Coração roo" />
        </span>
      </LandingContainer>
    </Wrapper>
  );
};

export default Landing;
