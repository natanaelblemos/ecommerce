import React from 'react';
import styled from 'styled-components';
import HeaderSec from '../Components/Header';
import item1 from '../img/item2.jpg'
import ban2 from '../img/ban2.png'
import Ban from '../Components/Banner';
import carrinho from '../img/carrinho.png';
import favoritos from '../img/favoritos.png';
import menu from '../img/menu.png';


const Ul = styled.ul`

    width:fit-content;
    max-width:85%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    list-style-type:none;
    position:relative;
    float:right;
    right:10px;
    margin:0;
    padding:0;

    *{
        margin:0;
        padding:0;
    }

        
    h1{
        display:block;
        width:100%;
        text-align:center;
        margin-top:10px;
        margin-bottom:30px;
    }

    li{
        margin:0;
        padding:0;
        border:solid 0.3px #333;
        max-width:350px;
        min-width:350px;
        min-height:fit-content;
        margin-left:15px;
        margin-bottom:20px;
        display:grid;
        grid-template-column: 125px 50px 175px;
        grid-template-row: auto auto auto auto;
    }
    li img{
        max-width:150px;
        height:auto;
        margin:10px;
        grid-column-start:1;
        grid-column-end:3;
        grid-row-start:1;
        grid-row-end:3;

    }
    li h2{
        width:fit-content;
        position:relative;
        top:0;
        grid-column-start:3;
        grid-column-end:4;
        grid-row-start:1;
        grid-row-end:2;
        font-size:17px;
    }
    li p{
        grid-column-start:3;
        grid-column-end:4;
        grid-row-start:2;
        grid-row-end:3;
    }
    li h4{
        grid-column-start:1;
        grid-column-end:4;
        grid-row-start:3;
        grid-row-end:4;
        text-align:center;
        font-size:20px;
        color:#395C9E;
    }
    li button{
        grid-column-start:1;
        grid-column-end:2;
        grid-row-start:4;
        grid-row-end:5;
        width:fit-content;
        height:fit-content;
        padding:5px 20px 5px 20px;
        margin-left:auto;
        margin-right:auto;
        border:none;
        background-color:#66E3A4;
        font-size:15px;
        font-family:Arial;
        color:#FFF;
        font-weight:bold;
        border-radius:10px;
    }
    li .favoritos{
        grid-column-start:2;
        grid-column-end:3;
        grid-row-start:4;
        grid-row-end:5;
        width:auto;
        margin-left:auto;
        margin-right:auto;
    }
    li .carrinho{
        grid-column-start:3;
        grid-column-end:5;
        grid-row-start:4;
        grid-row-end:5;
        align-content:center;
        justify-content:center;
        margin-left:auto;
        margin-right:auto;
    }
    @media screen and (max-width:880px){
        width:calc(100% - 150px);
    }

`;

const MenuNav = styled.nav`
    width:10%;
    height:auto;
    padding:10px;
    border:solid 0.3px #999;
    position:relative;
    float:left;
    margin:10px;


    ul{
        margin:0px;
        padding:0px;
        list-style-type:none;
    }
    li{
        padding-top:10px;
        padding-bottom:10px;
        width:100%;
    }
    ul li ul{
        padding-left:0px;
    }
    .liSecond:hover{
        Cursor:pointer;
        background-color:#555;
        color:#FFF;
    }
    .liFirst{
        color:#333;
        font-weight:bold;
    }
    .liSecond{
        color:#333;
        font-weight:500;
        text-align:center;
    }
    .liFirst p{
        display:inline;
        padding-top:10px;
        padding-bottom:10px;
        width:100%;
    }
    .liFirst p:hover{
        Cursor:pointer;
    }
    .ulInside{
        display:none;
    }

    @media screen and (max-width:880px){
        display:;
        position:absolute;
        min-width:100px;
        background-color:#FFF;
        float:left;
        z-index:9999;
    }
`;

const AbreNav = styled.div`
    width:40px;
    height:40px;
    background-image:url(${menu});
    position:absolute;
    left:0px;
    top:420px;
    background-attchament:cover;
    background-size:100%;
    background-position:center;
    background-repeat:no-repeate;
    border:solid 0.3px #888;
    border-radius:0px 10px 10px 0;
    display:none;
`;

export default function ListaProdutos(){

    //document.getElementsByClassName('ulInside').style.display = 'none'


    function handleLiNav(e){

        if(e.target.tagName === 'P'){
            let uls = document.querySelectorAll('.ulInside');
            for(let i=0;i< uls.length ; i++){
                uls[i].style.display= 'none'
            }
            e.target.nextElementSibling.style.display = 'block';
        }
    }

     let listaProdutos = [];
     listaProdutos.push({"nome":"Produto1","descricao":"Descrição do item 1","imagem": item1,"preco":250.99})
     
    if(localStorage.getItem('produtos')){
       const lista = localStorage.getItem('produtos')
        listaProdutos = JSON.parse(lista)
    }
 
    return(
        <>
            <HeaderSec />

            <Ban img={ban2}/>

            <MenuNav>
                <ul>
                    <li className='liFirst' onClick={handleLiNav}>
                        <p>Arcos</p>
                        <ul className='ulInside'>
                            <li className='liSecond'>TakeDown</li>
                            <li className='liSecond'>FlatBow</li>
                            <li className='liSecond'>Recurve</li>
                            <li className='liSecond'>LongBow</li>
                        </ul>
                    </li>
                    
                    <li className='liFirst' onClick={handleLiNav}>
                        <p> Escudos</p>
                        <ul className='ulInside'>
                            <li className='liSecond'>Retangular</li>
                            <li className='liSecond'>Circular</li>
                        </ul>
                    </li>
                    
                    <li className='liFirst' onClick={handleLiNav}>
                        <p>Flechas</p>
                        <ul className='ulInside'>
                            <li className='liSecond'>Madeira</li>
                            <li className='liSecond'>Fibra de Vidro</li>
                        </ul>
                    </li>

                </ul>
            </MenuNav>

            <AbreNav id='abreNav' />
            

            <Ul>
                    <h1>Nossos Produtos </h1>
                {
                   listaProdutos.map((itemAtual,i) => {
                       // console.log(itemAtual)
                        let descr;
                       if(itemAtual.descricao.length > 150){
                            descr = itemAtual.descricao.substring(0,150) + '...';     
                        }else{
                            descr = itemAtual.descricao;
                        }
                      return(
                        <li key={i}>
                            <img src={itemAtual.imagem}  alt={itemAtual.nome}/>
                            <h2>{itemAtual.nome}</h2>
                            <p>
                                {descr} 
                            </p>
                            <h4>R$ {itemAtual.preco}</h4>

                            <button>Comprar</button>
                            <img src={favoritos} alt='favoritos' className='favoritos'/>
                            <img src={carrinho} alt='adicionar Carrinho' className='carrinho'/>
                        </li>

                      )
                    })
                }

            </Ul>

        </>
    )

}