import React from 'react';
import styled from 'styled-components';
import HeaderSec from '../Components/Header';
//import item1 from '../img/item2.jpg'

const Ul = styled.ul`

    width:60%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    list-style-type:none;
    position:relative;
    float:right;
    right:2%;

    li{
        border:solid 0.3px #333;
        width:fit-content;
        min-height:150px;
    }
    li img{
        width:150px;
        height:auto;
    }
`;


export default function ListaProdutos(){

    /*const produtos = {"nome":"Produto1","descricao":"Descrição do item 1","imagem": item1,"preco":250.99}
    const teste =[];

    teste.push(produtos)
    teste.push(produtos)*/

    //localStorage.setItem('produtos','')
    
    const listaProdutos = localStorage.getItem('produtos')

    const lista = JSON.parse(listaProdutos)

    //console.log(listaProdutos)
 
    return(
        <>
            <HeaderSec />

            <Ul>
                {
                    lista.map((itemAtual,i) => {
                        console.log(itemAtual)
                      return(
                        <li key={i}>
                            <img src={itemAtual.imagem}  alt={itemAtual.nome}/>
                        </li>

                      )
                    })
                }

            </Ul>

        </>
    )

}