import styled from "styled-components";

export const Moreviews = styled.section`
    width:100%;
    height:fit-content;
    min-height:250px;
    background-color:#333;
    margin:0px;
    padding:0px;
    
    h1{
        color:#FFF;
        text-align:center;
        padding-top:20px;
        padding-bottom:20px;
    }
    ul{
        list-style-type:none;
        width:100%;
        height:auto;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        align-items: center;
        align-content: space-around;
        padding:0px;
    }
    ul li{
        min-width:270px;
        max-width:300px;
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
        color:#0F54AD;
    }
    ul li p{
        font-family:arial;
        font-size:15px;
    }
    a{
        text-decoration:none;
        font-family:Calibri;
        font-size:18px;
        font-weight:bold;
        color:#027DAD;
    }
`;
