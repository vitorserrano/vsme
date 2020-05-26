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

export const Description = styled.div`
  width: 100%;
  max-width: 580px;

  ul {
    padding-bottom: 40px;
    display: flex;
    align-items: center;
  }

  ul li {
    padding-right: 30px;
  }

  ul li a {
    color: #04d361;
    font-size: 30px;
  }
  ul li a:hover {
    color: #fff;
  }

  strong {
    color: #7159C1;
  }
 
  button {
    margin-top: 40px;
    width: 100%;
    max-width: 310px;
    height: 70px;
    
    border: none;
    border-radius: 5px;
    
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #E1E1E6;
    
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    
    background: #7159C1;
    box-shadow: 0px 6px 0px rgba(113,89,193,0.6);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(1.2);
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