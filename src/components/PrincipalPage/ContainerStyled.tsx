import { Col } from 'react-bootstrap';
import styled from 'styled-components';


export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center; /* Ajuste conforme necessário */
  background-color: #ffffff;
  border-radius: 8px;
  font-size: small;
  width: 100%;
`;

export const ColStyled = styled(Col)`
  display: inline-block;
  align-items: center;
  margin: 20px;
  justify-content: space-between;
`;

export const IconStyled = styled.svg`
  width: 40px;
  height: 40px;
  transition: transform 0.3s, fill 0.3s;
  cursor: pointer;
  display: block;
  margin: 20px auto; /* Centraliza o ícone horizontalmente e adiciona margem superior */

  &:hover {
    transform: scale(1.2);
    fill: darkblue;
  }
`;

export const TextStyled = styled.p`
  text-align: center;
  
  
  font-size: small;
  max-width: 200px; /* Define a largura máxima para o texto */
`;




