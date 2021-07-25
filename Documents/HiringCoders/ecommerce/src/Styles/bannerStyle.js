import styled from "styled-components";


export const Banner = styled.section`
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
        margin-left:100px;
        margin-top:150px;
        width:fit-content;
        height:fit-content;
        padding:10px;
        text-align:center;
    }
    h1{
        font-family:Calibri;
        font-size:55px;
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
    @media screen and (max-width:520px){
        width:100%;
        max-height:700px;
        height:fit-content;
        margin-top:60px;
    div{
        position:absolute;
        float:left;
        left:10px;
        top:70px;
        width:200px;
        height:fit-content;
        padding:0px;
        text-align:center;
    }
    div h1{
        font-family:Calibri;
        font-size:20px;
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
        font-size:11px;
        color:#FFF;
    }
}
`;