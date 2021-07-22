import styled from "styled-components";
import ban1 from '../img/banner2.jpg';

const Banner = styled.section`
    width:100%;
    max-height:700px;
    height:fit-content;

    img{
        width:100%;
        height:auto;
    }
    ul{
        list-style-type:none;
        width:100%;
        padding:0px;
        margin:0px;
        background-color:#333;
    }
    div{
        position:absolute;
        float:left;
        left:150px;
        top:250px;
        width:fit-content;
        height:fit-content;
        padding:10px;
        text-align:center;
    }
    div h1{
        font-family:Calibri;
        font-size:40px;
        color:#FFF;
        line-height:0;
    }
    div h3{
        font-family:Calibri;
        font-size:20px;
        color:#FFF;
    }
    div p{
        font-family:Arial;
        font-size:15px;
        color:#FFF;
    }
`;

export default function Ban(){
    return (
         <Banner>
             <div>
                 <h1>
                     WoodWolf
                 </h1>
                    <h3>Archery</h3>
                    <p>
                        Arcos, flechas, escudos, equipamentos e muito mais! 
                    </p>
             </div>
             <ul>
                 <li>
                     <img src={ban1} alt='Banner da WoodWolf'/>
                 </li>
             </ul>
         </Banner>
    )
 } 