import styled from "styled-components";

export const Button = styled.button`
  margin-top: 40px;
  width: 100%;
  max-width: 310px;
  height: 70px;
  border: none;
  border-radius: 5px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  color: ${props => props.theme.primary};
  background: ${props => props.theme.secondary};
  box-shadow: 0px 6px 0px ${props => props.theme.secondaryShadow};
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.text};
`;
