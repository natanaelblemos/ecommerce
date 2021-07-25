import styled from "styled-components";

export const Pickeventos = styled.li`
    width:calc(100%/3);
    height:fit-content;
    background-color:#FFF;
    min-width:350px;
    diplay:flex;
    flex-wrap:wrap;
    text-align:center;
    z-index:5000;

    fieldset{
        max-width:300px;
        width:fit-content;
        margin-left:auto;
        margin-right:auto;
    }
    legend, h2{
        width:fit-content;
        padding:5px;
        color:red;
        font-family: Arial;
        font-style:italic;
        font-size:52px;
        display:inline;
    }
    h2{
        font-size:30px;
        font-style:normal;
    }
    p{
        width:80%;
        margin-left:10%;
        text-align:center;
        font-family:calibri;
        font-size:20;
        color:#333;
        font-weight:bold;
        max-width: 250ch;
        overflow-y: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
    }
    a{
        font-family:calibri;
        font-weight:800;
        text-decoration:none;
        color:#027DAD;
        font-size:18px;
    }

    @media screen and (max-width:520px){
        max-width:70%;
        height:fit-content;
        background-color:#FFF;
        min-width:70%;
        diplay:flex;
        flex-wrap:wrap;
        text-align:center;
        z-index:5000;
        margin-left:auto;
        margin-right:auto;
        padding-bottom:20px;

    h1, h2{
        width:fit-content;
        padding:5px;
        color:red;
        font-family: Arial;
        font-style:italic;
        font-size:35px;
        display:inline;
    }
    h2{
        font-size:22px;
        font-style:normal;
    }
    p{
        width:80%;
        margin-left:10%;
        text-align:center;
        font-family:calibri;
        font-size:20;
        color:#333;
        font-weight:bold;
        max-width: 250ch;
        overflow-y: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
    }
    a{
        font-family:calibri;
        font-weight:800;
    }
    }
`;

export const Ul = styled.ul`
    width:100%;
    min-height:200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    flex-wrap:wrap;
    margin:0;
    padding:0;
    padding-top:20px;
    padding-bottom:20px;
    list-style-type: none;
`;