import React from "react";

import { FiPlay } from "react-icons/fi";

import {
  Wrapper,
  Container,
  Title,
  ListIcon,
  Icon,
  Content,
  Job,
} from "./styles";

export default function Experience() {
  return (
    <Wrapper>
      <Container>
        <Title>
          <ListIcon>
            <Icon>
              <FiPlay size={30} color="#fff" />
            </Icon>
            <Icon>
              <FiPlay size={30} color="#7159C1" />
            </Icon>
            <Icon>
              <FiPlay size={30} color="#04d361" />
            </Icon>
          </ListIcon>

          <h1>
            Todas as minhas <br />
            experiências profissionais
          </h1>
        </Title>

        <Content>
          <Job>
            <h2>Desenvolvedor Web</h2>
            <a
              title="Eu já trabalhei por aqui!"
              href="https://www.digitalone.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital One - Soluções Web
            </a>

            <p>Desenvolvimento de soluções web</p>
            <ul>
              <li>Criação de aplicações do total zero.</li>
              <li>
                Correção / Adição de funcionalidades para aplicações já
                existentes.
              </li>
              <li>Utilização de APIRestful</li>
              <li>Back-end: PHP, CodeIgniter e JavaScript</li>
              <li>Front-end: AngularJS, JQuery e Bootstrap.</li>
              <li>Controle de versão com GIT</li>
              <li>Utilização de Linux (Ubuntu)</li>
            </ul>
          </Job>

          <Job>
            <h2>Suporte Técnico</h2>
            <a
              title="Eu já trabalhei por aqui!"
              href="https://www.sisterra.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SISTERRA - Soluções Corporativas
            </a>

            <p>Atendimento ao cliente.</p>
            <ul>
              <li>
                Assistência em rejeições de notas fiscais eletrônicas (NF-e,
                NFC-e)
              </li>
              <li>Relatórios (FastReport)</li>
              <li>Manutenção em base de dados MySQL</li>
              <li>Rede de computadores</li>
              <li>Ajuda em rotinas administrativas</li>
              <li>Implantação do software</li>
              <li>Suporte a rede de computadores</li>
            </ul>
          </Job>
        </Content>
      </Container>
    </Wrapper>
  );
}
