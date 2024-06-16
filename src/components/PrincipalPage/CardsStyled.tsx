import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

// Estilizando o componente Card
export const StyledCard = styled(Card)`
  text-align: justify;
  display: flex;
  align-items: center;
  width: 100%; /* Faz o card ocupar toda a largura do container */
`;

// Estilizando o texto dentro do card
export const StyledText = styled(Card.Text)`
    padding-left:100px;
    color: #000000; /* Cor do texto */
    font-size: 15px; /* Tamanho da fonte */
    flex: 1; /* Faz o texto ocupar o espaço restante */
    margin:50px; /* Espaçamento entre a imagem e o texto */
    width: 300px; /* Ajuste conforme necessário */
    text-align: justify;
`;

// Estilizando a imagem dentro do card
export const StyledImage = styled.img`
    width: 622.5px; /* Ajuste conforme necessário */
    border: solid black 1px;
    height: 508px;
    flex-shrink: 0; /* Garante que a imagem não seja redimensionada */
`;


