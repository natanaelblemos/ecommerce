import logo from '../img/logo.png';
import menu from '../img/menu.png';
import face from '../img/face2.png';
import insta from '../img/insta2.png';
import wpp from '../img/wpp2.png';
import login from '../img/login.png';
import { Link } from "react-router-dom";
import fechaMeunu from '../img/fechaMeunu.png'
import React, { useEffect }  from "react";
import {HeaderSection,HeaderLI,Menu,SpanMenu} from '../Styles/headerstyle';

export default function HeaderSec(){

  const [headerHeight, setheaderHeight] = React.useState([]);

  window.onscroll = function(){scrollFunction()};

    function scrollFunction(){
      if(document.body.scroll > 0 || document.documentElement.scrollTop > 0){
        setheaderHeight('50px')
      }else{
        setheaderHeight('80px')
      }
    }
    
  // Cria constante para pegar o usuário logado
  const [nomeLogado, setnomeLogado] = React.useState([]);
  
  
  //Função que verifica se usuário está logao
  useEffect(() => {

    if(localStorage.getItem('sessao')){
      setnomeLogado(localStorage.getItem('sessao').substring(0,10))
    }else{
      setnomeLogado('')
    } 
  },[])
  //Função que verifica se usuário está logao


  /*---------------- Função para controlar o menu Mobile -----------------------*/
    function handleMenu(e){

      if(document.getElementById('spanMenu').style.width === '100vw'){
 
        document.getElementById('spanMenu').style.display = 'none';
        document.getElementById('spanMenu').style.width = '0';
        e.target.style.backgroundImage = `url(${menu})`;
        
      }else{
        document.getElementById('spanMenu').style.display = 'block';
        document.getElementById('spanMenu').style.width = '100vw';
        e.target.style.backgroundImage = `url(${fechaMeunu})`;
      }
    }
/*---------------- Função para controlar o menu Mobile -----------------------*/


/*---------------- Retorno da Função para Exibir itens da página -----------------------*/
    return(
      <>
        <HeaderSection height={headerHeight} id='headerHeight'> 
           <Link to='/' className='logo'> 
              <div id='logo'>
                <img src={logo} alt='WoodWolf'/>
              </div>
            </Link>

            <ul id='menu'>
                <Link to='/' ><HeaderLI>Home</HeaderLI></Link>
                <Link to ='/eventos' ><HeaderLI>Eventos</HeaderLI></Link>
                <Link to ='/produtos' ><HeaderLI>Produtos</HeaderLI></Link>
                <HeaderLI>Aulas</HeaderLI> 
                <HeaderLI>Contato</HeaderLI>
            </ul>

            <ul id='RSociais'>
                <HeaderLI className='bemvindo'>
                  <b>Bem vindo:</b> {nomeLogado}
                </HeaderLI>
                <Link to='https://fb.com/woodwolfarchery'>
                    <HeaderLI>
                        <img src={face} alt='Facebook' />
                    </HeaderLI>
                </Link>
                <Link to='https://instagram.com/woodwolfarchery'>
                    <HeaderLI>
                        <img src={insta} alt='instagram' />
                    </HeaderLI>
                </Link>
                <Link to='https://fb.com/woodwolfarchery'>
                    <HeaderLI>
                        <img src={wpp} alt='WhatsApp' />
                    </HeaderLI>
                </Link>
                <Link to='/login' className='LoginGrande'>
                    <HeaderLI>
                        <img src={login} alt='WhatsApp' />
                    </HeaderLI>
                </Link>
            </ul>

            <Menu img={menu}  onClick={handleMenu}/>

        </HeaderSection>
            <SpanMenu id='spanMenu'>
              <ul>
                  <Link to='/' ><HeaderLI>Home</HeaderLI></Link>
                  <Link to ='/eventos' ><HeaderLI>Eventos</HeaderLI></Link>
                  <Link to ='/produtos' ><HeaderLI>Produtos</HeaderLI></Link>
                  <HeaderLI>Aulas</HeaderLI> 
                  <HeaderLI>Contato</HeaderLI>
                  <Link to='/login'>
                    <HeaderLI>
                        <img src={login} alt='WhatsApp' />
                    </HeaderLI>
                </Link>
              </ul>
            </SpanMenu>
        </>
    )

/*---------------- Retorno da Função para Exibir itens da página -----------------------*/

}