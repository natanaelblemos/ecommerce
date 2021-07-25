import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderSec from '../Components/Header';
import { Form } from './Login';

export default function CadastroCliente(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const History = useHistory();

    //const produtoStorage = [];
    function MudaPagina(){
        History.push('/login')
    }
    
   // localStorage.setItem('produtos','') 
    let pegaCliStorageJSON =[];
    //console.log(localStorage.getItem('produtos'))
    return (
    <>
        <HeaderSec />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Form method='_POST' onSubmit={function HandleCadastro(e){
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

            MudaPagina()

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