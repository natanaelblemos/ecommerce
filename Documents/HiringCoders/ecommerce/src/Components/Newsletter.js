import styled from "styled-components";


const Newsletter = styled.div`
    width:100%;
    height:fit-content;
    background-color:#e5e5e5;
    padding-top:10px;
    padding-bottom:10px;
    margin:0px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;

    label{
        margin:10px;
        font-family: Arial;
        font-weight:500;
        color:#333;
        font-size:18px;
        text-align:center;

    }
    input[type=email]{
        border:none;
        border-radius:15px;
        min-width:250px;
        height:35px;
        box-shadow:1px 1px 2px 1px #777;
        font-size:20px;
        font-family:Arial;
        padding-left:10px;
        margin:10px 0px 10px 0px;
    }
    button{
        border:none;
        border-radius:15px;
        min-width:fit-content;
        padding:10px;
        height:fit-content;
        background-color:#6AEB8D;
        font-size:20px;
        color:#333;
        margin-left:10px;
    }
`;


export default function NewsLetter(){
    return(
            <Newsletter>

                    <label htmlFor='news'>Quer receber nossas novidades no seu email? </label>
                    <input name='email' id='news' placeholder='Digite aqui seu email' type='email' required/>
                    <button type='button'>Cadastrar</button>

            </Newsletter>
    )
}