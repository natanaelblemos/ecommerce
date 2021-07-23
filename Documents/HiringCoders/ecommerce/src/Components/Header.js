import styled from "styled-components";
import logo from '../img/logo.png';
import menu from '../img/menu.png';
import face from '../img/face2.png';
import insta from '../img/insta2.png';
import wpp from '../img/wpp2.png';
import login from '../img/login.png';
import { Link } from "react-router-dom";


export const HeaderSection = styled.header`
    width:100%;
    height:80px;
    background-color:#FFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    box-shadow:1px 1px 2px 1px #333;
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
      @media screen and (max-width: 1100px){
        #RSociais li img{
          height:25px;
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
      }
`;

export const HeaderLI = styled.li`
    width:fit-content;
    height:40px;
    font-size:18px;
    color:#444;
    border:none;
    padding-left:30px;
    padding-right:30px;
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
        font-size:12px;
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
  width:35px;
  height:35px;
  background-image:url(${props => props.img});
  background-attachment:cover;
  background-position:center;
  background-size:100%;
  background-repeat:no-repeat;
  border:solid 0.3px;
}
`;

export default function HeaderSec(){
    return(
        <HeaderSection>
            <div id='logo'>
                <img src={logo} alt='WoodWolf'/>
            </div>

            <ul id='menu'>
                <Link to='/' ><HeaderLI>Home</HeaderLI></Link>
                <Link to ='/eventos' ><HeaderLI>Eventos</HeaderLI></Link>
                <Link to ='/produtos' ><HeaderLI>Produtos</HeaderLI></Link>
                <HeaderLI>Aulas</HeaderLI> 
                <HeaderLI>Contato</HeaderLI>
            </ul>

            <ul id='RSociais'>
                <a href='https://fb.com/woodwolfarchery'>
                    <HeaderLI>
                        <img src={face} alt='Facebook' />
                    </HeaderLI>
                </a>
                <a href='https://instagram.com/woodwolfarchery'>
                    <HeaderLI>
                        <img src={insta} alt='instagram' />
                    </HeaderLI>
                </a>
                <a href='https://fb.com/woodwolfarchery'>
                    <HeaderLI>
                        <img src={wpp} alt='WhatsApp' />
                    </HeaderLI>
                </a>
                <Link to='/login'>
                    <HeaderLI>
                        <img src={login} alt='WhatsApp' />
                    </HeaderLI>
                </Link>
            </ul>

            <Menu img={menu} />

        </HeaderSection>
    )

}