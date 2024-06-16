import { ButtonFooterStyled } from "../FooterComponents/ButtonFooterStyled";

interface ButtonDefaultProps{
    label:string;
}


export default function ButtonDefault({label}:ButtonDefaultProps){
    console.log("Usou o buttonDefault...");

    return <ButtonFooterStyled>{label}</ButtonFooterStyled>

}