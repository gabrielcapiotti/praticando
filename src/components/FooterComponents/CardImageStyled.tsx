import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const FooterImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; /* Isto fará com que a imagem cubra o container, cortando-a se necessário */
`;

export const StyledCardImg = styled(Card.Img)`
  width: 100%;
  height: 300px;
  object-fit: cover; /* Isto fará com que a imagem cubra o container, cortando-a se necessário */
`;
