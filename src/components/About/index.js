import React from "react";

import { FiUser } from "react-icons/fi";

import {
  Wrapper,
  Container,
  Illustration,
  Description,
  ListIcon,
  Icon,
} from "./styles";

import theme from "../../styles/theme";

import ImgAbout from "../../assets/about.svg";

export default function About() {
  const items = [
    {
      key: String(Math.random()),
      icon: <FiUser size={30} color={theme.tertiary} />,
    },
    {
      key: String(Math.random()),
      icon: <FiUser size={30} color={theme.secondary} />,
    },
    {
      key: String(Math.random()),
      icon: <FiUser size={30} color={theme.primary} />,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Illustration>
          <img src={ImgAbout} alt="Um pouco sobre mim" />
        </Illustration>

        <Description>
          <ListIcon>
            {items.map((item) => (
              <Icon key={item.key}>{item.icon}</Icon>
            ))}
          </ListIcon>

          <h1>Um pouco sobre mim</h1>
          <p>
            Atualmente sou Desenvolvedor Web atuando com PHP, AngularJS e
            JavaScript nos projetos/produtos do meu atual emprego.
          </p>

          <p>
            Estudo Node.js, React e React Native por conta própria, pois sou
            apaixonado por todo o ecossistema JavaScritpt e acredito que com
            essa stack de tecnologias irei alcançar meus objetivos.
          </p>
          
          <p>
            Meu objetivo é criar aplicações limpas utilizando bons padrões de
            códigos com um design simples e intuitivo. Sou movido por construir
            soluções com tecnologias atuais e escaláveis.
          </p>
        </Description>
      </Container>
    </Wrapper>
  );
}
