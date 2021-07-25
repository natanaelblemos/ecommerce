import React,{ useState } from 'react';
import HeaderSec from '../Components/Header';
import { Form } from './Login';


export default function Admin(){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    //const produtoStorage = [];
    
    
   // localStorage.setItem('produtos','') 
    let pegaProdStorageJSON =[];
    //console.log(localStorage.getItem('produtos'))
    return (
    <>
        <HeaderSec />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Form method='_POST' onSubmit={function handleCadastro(e){
            e.preventDefault();

            let produtos = {"nome":nome,"descricao":descricao,"imagem": imagem,"preco":preco, "quantidade":quantidade}
           
            //produtoStorage.push(produtos);

           let pegaProdutosStorage = [] //localStorage.getItem('produtos')
           
           if(localStorage.getItem('produtos')){
                pegaProdutosStorage = localStorage.getItem('produtos')
                pegaProdStorageJSON = JSON.parse(pegaProdutosStorage)
                pegaProdStorageJSON.push(produtos)
            }else{
                pegaProdStorageJSON.push(produtos)
            }
           
            pegaProdutosStorage = JSON.stringify(pegaProdStorageJSON)

           localStorage.setItem('produtos',pegaProdutosStorage)

            alert('Dados cadastrados com sucesso!');

            setNome('');
            setDescricao('');
            setImagem('');
            setPreco(0);
            setQuantidade(0);

           //const listaProdutos = localStorage.getItem('produtos')

           //const lista = JSON.parse(listaProdutos)

          // console.log(localStorage.getItem('produtos'));
            //console.log(lista);

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