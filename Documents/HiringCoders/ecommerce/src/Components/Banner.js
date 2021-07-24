import styled from "styled-components";


const Banner = styled.section`
    width:100%;
    max-height:700px;
    height:fit-content;
    margin-top:80px;

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
    @media screen and (max-width:1200px){
        div{
            position:absolute;
            float:left;
            left:50px;
            top:150px;
            width:fit-content;
            height:fit-content;
            padding:10px;
            text-align:center;
        }
        div h1{
            font-family:Calibri;
            font-size:30px;
            color:#FFF;
            line-height:0;
        }
        div h3{
            font-family:Calibri;
            font-size:15px;
            color:#FFF;
        }
        div p{
            font-family:Arial;
            font-size:12px;
            color:#FFF;
            width:60%;
            margin-left:auto;
            margin-right:auto;
        } 
    }
`;

export default function Ban(props){
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
                     <img src={props.img} alt='Banner da WoodWolf'/>
                 </li>
             </ul>
         </Banner>
    )
 } 