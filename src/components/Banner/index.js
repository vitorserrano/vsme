import React from "react";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import { Wrapper, Container, Description, Illustration } from "./styles";
import ImgDev from "../../assets/dev.svg";

export default function Banner() {
  return (
    <Wrapper>
      <Container>
        <Description>
          <ul>
            <li>
              <a
                className="icon"
                title="Aqui é onde eu guardo os códigos"
                href="https://github.com/vitorserrano"
                target="_blank"
              >
                <FiGithub />
              </a>
            </li>

            <li>
              <a
                className="icon"
                title="Aqui tem um pouco de mim"
                href="https://www.instagram.com/virtuzera/"
                target="_blank"
              >
                <FiInstagram />
              </a>
            </li>

            <li>
              <a
                className="icon"
                title="Aqui tem meu currículo e alguns posts"
                href="https://www.linkedin.com/in/vitor-serrano"
                target="_blank"
              >
                <FiLinkedin />
              </a>
            </li>
          </ul>

          <h1>
            E aí? meu nome é <strong>Vitor</strong>
          </h1>

          <h1>
            sou desenvolvedor web / mobile apaixonado por
            <strong> JavaScript</strong> e <strong>UX Design.</strong>
          </h1>

          <button> ver projetos </button>
        </Description>

        <Illustration>
          <img src={ImgDev} alt="Desenvolvedor" />
        </Illustration>
      </Container>
    </Wrapper>
  );
}
