import 'react';
import { FooterContentStyled } from '../components/FooterContentStyled';
import { HeaderContentStyled} from '../components/HeaderContentStyled';
import { MainContentStyled } from '../components/MainContentStyled';
import { ButtonFooterStyled } from '../components/FooterComponents/ButtonFooterStyled';
import MyContainer from '../components/PrincipalPage/Containter'; // Corrigido o nome do componente Container
import Cards from '../components/PrincipalPage/Cards';
import { StyledImage } from '../components/HeaderComponents/CardImageStyled';
import { FooterImage } from '../components/FooterComponents/CardImageStyled';


export default function Home() {
  return (
    <>
      <HeaderContentStyled>
      <StyledImage src="src/assets/Souls of Cinder.jfif" alt="Description" />


      </HeaderContentStyled>

      <MainContentStyled>
        <MyContainer />
        
        <Cards />
        </MainContentStyled>

        <FooterImage src="src/assets/Souls of Cinder.jfif" alt="Description" />

      <FooterContentStyled>
        <ButtonFooterStyled>About</ButtonFooterStyled>
        <ButtonFooterStyled>Contact</ButtonFooterStyled>
        <ButtonFooterStyled>Terms of Use</ButtonFooterStyled>
        <ButtonFooterStyled>Privacy Policy</ButtonFooterStyled>
        <p style={{ fontSize: "10px", marginLeft: "30px", marginTop: "-10px" }}>Your Website 2020. All Rights Reserved</p>
      </FooterContentStyled>
    </>
  );
}
