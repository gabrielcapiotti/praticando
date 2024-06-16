import  'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyledCard, StyledText, StyledImage } from './CardsStyled'; // Importa os estilos
import { CardTitle } from 'react-bootstrap';

export default function Cards() {
  return (
    <Row>
      {/* Primeiro Card */}
      <Col xs={12} md={6}>
        <StyledCard>
          <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
              <StyledImage src="src/assets/Download imagens Ashen Um, 4k, guerreiro, 2017 jogos, RPG, Dark Souls 3 grátis_ Imagens livre papel de parede (1).jfif" alt="Card" className="img-fluid" />
            <StyledText>
            <CardTitle style={{fontWeight:'bold', fontSize: "20px", textAlign:"center", marginBottom: "10px"}}>Aqui é um Titulo!</CardTitle>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Atque aspernatur necessitatibus inventore velit autem, 
              assumenda nobis tenetur obcaecati ratione quasi! Voluptas 
              at provident mollitia, ipsum quasi esse consequatur minus atque? 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, perferendis? 
              Quaerat consequatur distinctio doloribus nisi temporibus cupiditate! Enim culpa 
              doloribus dolorum vitae eius aut minima. Nemo deleniti aliquid ipsum cumque. 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum natus 
              iusto mollitia ut culpa consectetur magni ipsum ad nulla enim debitis, ratione nostrum quas sint. 
              Quam reprehenderit veniam inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Officia deserunt tempore et necessitatibus! Sequi cupiditate veniam expedita. Consequuntur, sapiente, 
              obcaecati amet accusamus illum est incidunt suscipit mollitia quasi, blanditiis velit?
            </StyledText>
          </Card.Body>
        </StyledCard>
      </Col>
      
      {/* Segundo Card */}
      <Col xs={12} md={6}>
        <Card.Body style={{ display: 'flex', alignItems: 'center'}}>
            <StyledText style={{}}>
            <CardTitle style={{fontWeight:'bold', fontSize: "20px", textAlign:"center", marginBottom: "10px"}}>Aqui é um Titulo!</CardTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Atque aspernatur necessitatibus inventore velit autem, 
              assumenda nobis tenetur obcaecati ratione quasi! Voluptas 
              at provident mollitia, ipsum quasi esse consequatur minus atque? 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, perferendis? 
              Quaerat consequatur distinctio doloribus nisi temporibus cupiditate! Enim culpa 
              doloribus dolorum vitae eius aut minima. Nemo deleniti aliquid ipsum cumque. 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum natus 
              iusto mollitia ut culpa consectetur magni ipsum ad nulla enim debitis, ratione nostrum quas sint. 
              Quam reprehenderit veniam inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Officia deserunt tempore et necessitatibus! Sequi cupiditate veniam expedita. Consequuntur, sapiente, 
              obcaecati amet accusamus illum est incidunt suscipit mollitia quasi, blanditiis velit?
            </StyledText>
              <StyledImage src="src/assets/Download imagens Ashen Um, 4k, guerreiro, 2017 jogos, RPG, Dark Souls 3 grátis_ Imagens livre papel de parede (1).jfif" alt="Card" className="img-fluid" />
          </Card.Body>
      </Col>

      {/* Terceiro Card, movido para a direita */}
      <Col xs={12} md={6} className="d-none d-md-block"></Col> {/* Espaço vazio à esquerda para tela md e acima */}
      <Col xs={12} md={6}>
        <StyledCard>
          <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
              <StyledImage src="src/assets/Download imagens Ashen Um, 4k, guerreiro, 2017 jogos, RPG, Dark Souls 3 grátis_ Imagens livre papel de parede (1).jfif" alt="Card" className="img-fluid" />
            <StyledText>
            <CardTitle style={{fontWeight:'bold', fontSize: "20px", textAlign:"center", marginBottom: "10px"}}>Aqui é um Titulo!</CardTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Atque aspernatur necessitatibus inventore velit autem, 
              assumenda nobis tenetur obcaecati ratione quasi! Voluptas 
              at provident mollitia, ipsum quasi esse consequatur minus atque? 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, perferendis? 
              Quaerat consequatur distinctio doloribus nisi temporibus cupiditate! Enim culpa 
              doloribus dolorum vitae eius aut minima. Nemo deleniti aliquid ipsum cumque. 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum natus 
              iusto mollitia ut culpa consectetur magni ipsum ad nulla enim debitis, ratione nostrum quas sint. 
              Quam reprehenderit veniam inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Officia deserunt tempore et necessitatibus! Sequi cupiditate veniam expedita. Consequuntur, sapiente, 
              obcaecati amet accusamus illum est incidunt suscipit mollitia quasi, blanditiis velit?
            </StyledText>
          </Card.Body>
        </StyledCard>
      </Col>
    </Row>
  );
}
