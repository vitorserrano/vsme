import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Illustration = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
    max-width: 550px;
  }
`;


export const Description = styled.div`
  width: 100%;
  max-width: 580px;
`;

export const ListIcon = styled.ul`
  padding-bottom: 40px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.li`
  padding-right: 30px;
`;