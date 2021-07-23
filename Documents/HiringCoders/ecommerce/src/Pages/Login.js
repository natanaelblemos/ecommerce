import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'


export const Form = styled.form`
    min-width:350px;
    width:fit-content;
    padding:20px;
    height:auto;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:space-around;
    text-align:left;
    margin-left:auto;
    margin-right:auto;
    border:solid 0.3px #333;
    background-color:#FFF;

    input[type=text], input[type=password]{
        height:35px;
        border-radius:0px;
        border:none;
        border-bottom:solid 0.3px #333;
        margin-bottom:20px;
        background-color:#e5e5e5;
    }
    label{
        font-family:Calibri;
        font-size:22px;
        margin:5px;
        color:#444;
    }
    button{
        width:50%;
        height:30px;
        border:none;
        background-color:#78EDA7;
        font-family:calibri;
        margin-left:auto;
        margin-right:auto;
        font-size:20px;
        font-weight:600;
        margin-bottom:10px;
    }
`;

const SectionAll = styled.section`
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: #7c7c7c; /* Old browsers */
    background: -moz-linear-gradient(top,  #7c7c7c 0%, #c0d8ed 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #7c7c7c 0%,#c0d8ed 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #7c7c7c 0%,#c0d8ed 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7c7c7c', endColorstr='#c0d8ed',GradientType=0 ); /* IE6-9 */
    ;
`;

export default function Login(){

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const usuario = {
                login:'admin'
                ,senha:'admin'
                ,tipo: 2
            };

    return(
        <>
            <SectionAll>
                <Form method ='_POST' onSubmit={function handleLogin(e){
                    e.preventDefault();
                   //usuario
                       if(usuario.login === login && usuario.senha === senha){
                          // console.log(usuario.login + 'teste');
                          history.push('/admin')
                       }else{
                        console.log(login);
                       }
                   
                    
                }}>
                    <label>Login</label>
                        <input type='text' name='login' value={login} onChange={e => setLogin(e.target.value)}/>
                    <label>Senha</label>
                        <input type='password' name='senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                    <button id='Entrar' >Entrar</button>
                    <button id='Cadastrar'>Cadastrar</button>
                </Form>
            </SectionAll>
        </>
    )

}