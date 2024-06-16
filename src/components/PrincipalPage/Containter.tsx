import 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { ContainerStyled, ColStyled, IconStyled, TextStyled } from './ContainerStyled';
import { CardTitle } from 'react-bootstrap';

export default function MyContainer() {
  return (
    <ContainerStyled>
      <Row>
        <ColStyled xs={4}>
          <Card>
            <Card.Img as="div">
              <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-check-circle">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </IconStyled>
            </Card.Img>
            <Card.Body>
              <CardTitle style={{textAlign:"center", fontSize:"20px", color:"black", fontWeight:'bolder'}}>
                Fácil Aproveitamento!
              </CardTitle>
              <TextStyled>
                Estamos no caminho!
              </TextStyled>
            </Card.Body>
          </Card>
        </ColStyled>

        <ColStyled xs={4}>
          <Card>
            <Card.Img as="div">
              <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-laptop">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
              </IconStyled>
            </Card.Img>
            <Card.Body>
              <CardTitle style={{textAlign:"center", fontSize:"20px", color:"black", fontWeight:'bolder'}}>
                Somente para Desktop
              </CardTitle>
              <TextStyled>
                Vamos aprender como utilizar um framework
              </TextStyled>
            </Card.Body>
          </Card>
        </ColStyled>

        <ColStyled xs={4}>
          <Card>
            <Card.Img as="div">
              <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="bi bi-file-code">
                <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
              </IconStyled>
            </Card.Img>
            <Card.Body>
              <CardTitle style={{fontSize:"20px", color:"black", fontWeight:'bolder'}}>
                Criando com Componentes!
              </CardTitle>
              <TextStyled>
                Utilizamos o Styled Components
              </TextStyled>
            </Card.Body>
          </Card>
        </ColStyled>
      </Row>
    </ContainerStyled>
  );
}
