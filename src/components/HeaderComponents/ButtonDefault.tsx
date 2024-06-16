import { ButtonDefaultStyled } from "./ButtonDefaultStyled";

interface ButtonDefaultProps{
    label:string;
}


export default function ButtonDefault({label}:ButtonDefaultProps){
    console.log("Usou o buttonDefault...");

    return <ButtonDefaultStyled>{label}</ButtonDefaultStyled>

}