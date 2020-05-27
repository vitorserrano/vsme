import styled from 'styled-components';

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
`;

export const Title = styled.div`
  margin-bottom: 120px;
`;

export const ListIcon = styled.ul`
  padding-bottom: 40px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.li`
  padding-right: 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Job = styled.div`
  width: 100%;
  max-width: 540px;
  height: 100%;
  min-height: 407px;
  padding-top: 40px;
  border-top: 4px solid ${(props) => props.theme.secondary};

  h2 {
    margin-bottom: 8px;
  }

  a {
    font-size: 20px;
    text-decoration: none;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.primary};
    font-weight: normal;
  }

  a:hover {
    filter: brightness(1.2);
  }

  ul {
    margin-top: 40px;
  }

  ul li {
    line-height: 2;
    font-size: 18px;
    color: ${(props) => props.theme.paragraph};
  }
`;
