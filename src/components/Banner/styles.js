import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const Presentation = styled.div`
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

  a {
    color: #04d361;
    font-size: 30px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  
  a:hover {
    color: #fff;
  }
`;

export const Illustration = styled.div`
  width: 100%;
  max-width: 580px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
  }
`;