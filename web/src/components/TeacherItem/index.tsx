import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container, HeaderContainer, Footer } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <img
          src="https://avatars2.githubusercontent.com/u/54416354?s=460&u=89172d23f947c15cb1502ce43e1e644ecd3a8bf6&v=4"
          alt="Lucas Silva"
        />
        <div>
          <strong>Lucas Silva</strong>
          <span>Química</span>
        </div>
      </HeaderContainer>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <Footer>
        <p>
          Preço/hora
          <strong>R$ 70,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsaap" />
          Entrar em contato
        </button>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
