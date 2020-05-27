import React from "react";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import {
  Wrapper,
  Container,
  Presentation,
  ListIcon,
  Icon,
  Illustration,
} from "./styles";

import ImgDev from "../../assets/dev.svg";

import ButtonDefault from "../../components/ButtonDefault";

export default function Banner() {
  const items = [
    {
      key: String(Math.random()),
      title: "Aqui é onde eu guardo os códigos",
      href: "https://github.com/vitorserrano",
      icon: <FiGithub />,
    },
    {
      key: String(Math.random()),
      title: "Aqui tem um pouco de mim",
      href: "https://www.instagram.com/virtuzera/",
      icon: <FiInstagram />,
    },
    {
      key: String(Math.random()),
      title: "Aqui tem meu currículo e alguns posts",
      href: "https://www.linkedin.com/in/vitor-serrano/",
      icon: <FiLinkedin />,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Presentation>
          <ListIcon>
            {items.map((item) => (
              <Icon key={item.key}>
                <a 
                  title={item.title} 
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              </Icon>
            ))}
          </ListIcon>

          <h2>
            E aí? meu nome é <strong>Vitor</strong>
          </h2>

          <h2>
            sou desenvolvedor web apaixonado por
            <strong> JavaScript</strong> e <strong>UX Design.</strong>
          </h2>

          <ButtonDefault title="Meus Trabalhos" />
        </Presentation>

        <Illustration>
          <img src={ImgDev} alt="Desenvolvedor" />
        </Illustration>
      </Container>
    </Wrapper>
  );
}
