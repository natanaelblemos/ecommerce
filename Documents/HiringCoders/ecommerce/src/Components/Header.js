import styled from "styled-components";
import logo from '../img/logo.png';
import menu from '../img/menu.png';
import face from '../img/face2.png';
import insta from '../img/insta2.png';
import wpp from '../img/wpp2.png';
import login from '../img/login.png';
import { Link } from "react-router-dom";
import fechaMeunu from '../img/fechaMeunu.png'



export const HeaderSection = styled.header`
    width:100%;
    height:80px;
    position:fixed;
    top:0px;
    background-color:#FFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    box-shadow:1px 1px 2px 1px #333;
    z-index:9999;


    #logo{
        width:fit-content;
        height:100%;
        margin-left:10px;
    }
    #logo img{
        width:auto;
        height:80px;
    }
    #logo img:hover{
      cursor:pointer;
    }
    ul{
        list-style-type:none;
        display:flex;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
        width:fit-content;
      }
      #RSociais li{
        width:fit-content;
        padding:none;
      }
      #RSociais li img{
        height:35px;
        width:auto;
      }
      #RSociais li:hover{
        background-color:#FFF;
      }      
      #menuMobile{
        display:none;
      }
      span{
        display:none;
        position:absolute;
        width:30%;
        height: 100vh;
        background-color:#FFF;
        z-index:9999;
      }
      span ul{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
      }
      a{
        text-decoration:none;
      }
      @media screen and (max-width: 1100px){
        #RSociais li img{
          height:35px;
          margin:0px;
          padding:0px;
        } 
        #RSociais li{
          width:20px;
          padding:none;
        }
        #menu{
          display:none;
        }
        .LoginGrande{
          display:none;
        }
      }

`;

export const HeaderLI = styled.li`
    width:fit-content;
    height:40px;
    font-size:15px;
    color:#444;
    border:none;
    padding-left:10px;
    padding-right:10px;
    font-family:Sans-Serif;
    line-height:40px;

    img{
        width:auto;
        height:35px;
    }
    :hover{
        cursor:pointer;
        background-color:#E5e5e5;
    }
    @media screen and (max-width: 1100px){
        width:fit-content;
        height:40px;
        font-size:15px;
        color:#444;
        border:none;
        padding-left:10px;
        padding-right:10px;
        font-family:Sans-Serif;
        line-height:40px;
    }
`;

export const Menu = styled.div`
display:none;

@media screen and (max-width: 1100px){
  display:block;
  min-width:35px;
  width:35px;
  height:35px;
  background-image:url(${props => props.img});
  background-attachment:cover;
  background-position:center;
  background-size:100%;
  background-repeat:no-repeat;
  border:solid 0.3px;
  margin-right:30px;
}
`;
const SpanMenu = styled.nav`
display:none;

@media screen and (max-width: 1100px){
  display:none;
  width:0px;
  height:100vh;
  background-color:#FFF;
  position:fixed;
  float:right;
  right:0px;
  top:80px;
  z-index:99999;
  box-shadow:-1px 1px 2px 1px #333;

  ul{
    list-style-type:none;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    width:100%;
    color:#000;
  }
  li{
    width:auto;
    text-align:center;
    font-size:25px;
    height:70px;
  }
  a{
    text-decoration:none;
  }
}
`;

export default function HeaderSec(){

    function handleMenu(e){

      if(document.getElementById('spanMenu').style.width === '0px'){
 
          document.getElementById('spanMenu').style.display = 'block';
          document.getElementById('spanMenu').style.width = '100vw';
          e.target.style.backgroundImage = `url(${fechaMeunu})`;

      }else{
        document.getElementById('spanMenu').style.display = 'none';
        document.getElementById('spanMenu').style.width = '0';
        e.target.style.backgroundImage = `url(${menu})`;
      }
    }

    return(
      <>
        <HeaderSection>
           <Link to='/'> 
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

}