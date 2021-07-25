import styled from "styled-components";


const Footer = styled.footer`
    width:100%;
    height:40px;
    background-color:#333;
    padding:0px;
    margin:0px;
    text-align:center;
    color:#FFF;
    padding-top:10px;
`;

export default function FooterSection(){

    return(
        <Footer>
            <p>Copyright @ Todos os direitos WoodWofArchery 2021</p>
        </Footer>

    )

}