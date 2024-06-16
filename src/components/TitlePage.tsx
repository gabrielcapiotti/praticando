import {HeaderContentStyled} from "./HeaderContentStyled";

interface TitlePageProps {
    title: string;
    showDivider: boolean;
}

export default function TitlePage({ title, showDivider }: TitlePageProps) {
    return (
        <>
        <HeaderContentStyled>
            <h1>{title}</h1>
            {showDivider && <hr />}
        </HeaderContentStyled>
        </>
        
    );
}
