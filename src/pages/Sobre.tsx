import 'react';
import ButtonDefault from '../components/HeaderComponents/ButtonDefault';
import { FooterContentStyled } from '../components/FooterContentStyled';
import { HeaderContentStyled } from '../components/HeaderContentStyled';
import TitlePage from '../components/TitlePage';
import { ButtonDefaultStyled } from '../components/HeaderComponents/ButtonDefaultStyled';
import { MainContentStyled } from '../components/MainContentStyled';



export default function Sobre() {
    return  (
    <>
        <TitlePage title="Home" showDivider={true}/>
        <HeaderContentStyled>
            <ButtonDefaultStyled>Iniciar</ButtonDefaultStyled>
            <ButtonDefaultStyled>Marcas</ButtonDefaultStyled>
            <ButtonDefaultStyled>Sobre nós</ButtonDefaultStyled>

        </HeaderContentStyled>
        <MainContentStyled>
            <div> 
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laboriosam sequi aut assumenda rerum hic sit? A esse at rem. 
                    Necessitatibus ad veritatis animi itaque ab tempora eligendi 
                    adipisci aperiam quaerat!
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laboriosam sequi aut assumenda rerum hic sit? A esse at rem. 
                    Necessitatibus ad veritatis animi itaque ab tempora eligendi 
                    adipisci aperiam quaerat!
                </p>
            </div>
        </MainContentStyled>
        
        
        <FooterContentStyled>Qualquer coisa.</FooterContentStyled>
    </>
    )
}



