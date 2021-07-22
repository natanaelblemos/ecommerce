import styled from "styled-components";
import item1 from '../img/item1.jpg';
import item2 from '../img/item2.jpg';
import item3 from '../img/item3.png';


const Moreviews = styled.section`
    width:100%;
    height:fit-content;
    min-height:250px;
    background-color:#333;

    h1{
        color:#FFF;
        text-align:center;
        padding-top:20px;
        padding-bottom:20px;
    }
    ul{
        list-style-type:none;
        width:fit-content;
        height:auto;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        align-items: center;
        align-content: space-around;
    }
    ul li{
        width:calc(100%/4);
        height:fit-content;
        color:#FFF;
        display:grid;
        grid-template-columns:auto auto;
        grid-template-rows: 40px min-content;
        grid-gap:10px;
    }
    ul li img{
        height:200px;
        width:auto;
        display:inline;
        grid-row-start:1;
        grid-row-end:3;
    }
    ul li h3{
        font-family:arial;
        font-size:20px;
        width:fit-content;
    }
    ul li p{
        font-family:arial;
        font-size:15px;
    }
`;


export default function MoreViews(){
    return(

        <Moreviews>

                <h1>Itens Mais Visitados</h1>

            <ul>
                <li>
                    <img src={item1} alt='item1'/>
                    <h3>Nome do Item</h3>
                    <p>
                        Modelo: Modelo <br/>
                        Tipo: tipo do arco <br/>
                        Componentes: Madeira, pvc, pvc e Madeira <br/>
                        Peso: peso.kg <br/>
                        Comprimento: altura.m <br/>
                        Libra: libra.lbs<br/>
                        <a href='#'>Ver Este</a>
                    </p>
                </li>
         
                <li>
                    <img src={item2} alt='item1'/>
                    <h3>Nome do Item</h3>
                    <p>
                        Modelo: Modelo <br/>
                        Tipo: tipo do arco <br/>
                        Componentes: Madeira, pvc, pvc e Madeira <br/>
                        Peso: peso.kg <br/>
                        Comprimento: altura.m <br/>
                        Libra: libra.lbs<br/>
                            <a href='#'>Ver Este</a>
                    </p>
                </li>
         
                <li>
                    <img src={item3} alt='item1'/>
                    <h3>Nome do Item</h3>
                    <p>
                        Modelo: Modelo <br/>
                        Tipo: tipo do arco <br/>
                        Componentes: Madeira, pvc, pvc e Madeira <br/>
                        Peso: peso.kg <br/>
                        Comprimento: altura.m <br/>
                        Libra: libra.lbs<br/>
                        <a href='#'>Ver Este</a>
                    </p>
                </li>
            </ul>
        </Moreviews>

    )
}