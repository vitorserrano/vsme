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
  background: #7159c1;
  box-shadow: 0px 6px 0px rgba(113, 89, 193, 0.6);
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
  color: #e1e1e6;
`;
