import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
//import styled from 'styled-components';
import {HeaderSection, HeaderLI, Menu} from '../Components/Header';
import logo from '../img/logo.png';
import menu from '../img/menu.png';
import { Form } from './Login';

export default function CadastroCliente(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    //const produtoStorage = [];
    
    
   // localStorage.setItem('produtos','') 
    let pegaCliStorageJSON =[];
    //console.log(localStorage.getItem('produtos'))
    return (
    <>
        <HeaderSection>
            <div id='logo'>
                <img src={logo} alt='WoodWolf'/>
            </div>
            <Link to='/'>
                <HeaderLI>
                    Voltar
                </HeaderLI>
            </Link>

            <Menu img={menu}/>
        </HeaderSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Form method='_POST' onSubmit={function handleCadastro(e){
            e.preventDefault();

            let cliente = {"nome":nome,"email":email,"login": login,"senha":senha}
           
            //produtoStorage.push(produtos);

           let pegaclienteStorage = [] //localStorage.getItem('produtos')
           
           if(localStorage.getItem('cliente')){
                pegaclienteStorage = localStorage.getItem('cliente')
                pegaCliStorageJSON = JSON.parse(pegaclienteStorage)
                pegaCliStorageJSON.push(cliente)
            }else{
                pegaCliStorageJSON.push(cliente)
            }
           
            pegaclienteStorage = JSON.stringify(pegaCliStorageJSON)

           localStorage.setItem('cliente',pegaclienteStorage)

            alert('Dados cadastrados com sucesso!');

            setNome('');
            setEmail('');
            setLogin('');
            setSenha('');

        }}>
            <label>Nome</label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
            <label>Email</label>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
            <label>Login</label>
                <input type='text' value={login} onChange={e => setLogin(e.target.value)} />
            <label>Senha</label>
                <input type='text' value={senha} onChange={e => setSenha(e.target.value)} />
        
            <button>Gravar</button>
        </Form>
    </>
    )

}