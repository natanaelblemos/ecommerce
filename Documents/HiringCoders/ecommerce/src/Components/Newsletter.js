import styled from "styled-components";


const Newsletter = styled.div`
    width:100%;
    height:80px;
    background-color:#e5e5e5;
    padding:0px;
    margin:0px;
`;


export default function NewsLetter(){
    return(
            <Newsletter>

                    <label for='news'>Quer receber nossas novidades no seu email?</label>
                    <input name='email' id='news' placeholder='Digite aqui seu email' type='email' required/>
                    <button type='button'>Cadastrar</button>

            </Newsletter>
    )
}