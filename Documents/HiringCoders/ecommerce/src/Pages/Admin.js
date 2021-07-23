import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
//import styled from 'styled-components';
import {HeaderSection, HeaderLI, Menu} from '../Components/Header';
import logo from '../img/logo.png';
import menu from '../img/menu.png';
import { Form } from './Login';


export default function Admin(){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const produtoStorage = [];
    
    
   // localStorage.setItem('produtos','') 
    let pegaProdStorageJSON =[];
    console.log(localStorage.getItem('produtos'))
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
        <Form method='_POST' onSubmit={function handleCadastro(e){
            e.preventDefault();

            let produtos = {"nome":nome,"descricao":descricao,"imagem": imagem,"preco":preco, "quantidade":quantidade}
           
            //produtoStorage.push(produtos);

           let pegaProdutosStorage = localStorage.getItem('produtos')
           
           if(pegaProdutosStorage.length > 0){
                pegaProdStorageJSON = JSON.parse(pegaProdutosStorage)
                pegaProdStorageJSON.push(produtos)
            }else{
                pegaProdStorageJSON.push(produtos)
            }
           
            pegaProdutosStorage = JSON.stringify(pegaProdStorageJSON)

           localStorage.setItem('produtos',pegaProdutosStorage)

           const listaProdutos = localStorage.getItem('produtos')

           const lista = JSON.parse(listaProdutos)

          // console.log(localStorage.getItem('produtos'));
            console.log(lista);

        }}>
            <label>Nome do Produto</label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
            <label>Descrição do Produto</label>
                <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)} />
            <label>Imagem do Produto</label>
                <input type='text' value={imagem} onChange={e => setImagem(e.target.value)} />
            <label>Preço do Produto</label>
                <input type='text' value={preco} onChange={e => setPreco(e.target.value)} />
            <label>Quantidade em Estoque</label>
                <input type='text' value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            <button>Gravar</button>
        </Form>
    </>
    )
}