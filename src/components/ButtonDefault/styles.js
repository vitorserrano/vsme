import styled from 'styled-components';

export const Button = styled.button`
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

    &:hover {
        filter: brightness(1.2);
    }
`;
