import styled from "styled-components";

export const HeaderSection = styled.header`
    width:100%;
    height:${props => props.height};
    position:fixed;
    top:0px;
    background-color:#FFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    box-shadow:1px 1px 2px 1px #333;
    z-index:9999;

    .bemvindo{
      font-weight:bold;
      width:150px;
    }
    .logo{
        max-height:${props => props.height};
        min-height:${props => props.height};
        margin:0;
        padding:0;
    }
    #logo{
        width:fit-content;
        max-height:${props => props.height};
        margin:0;
        padding:0;
        margin-left:10px;
    }
    #logo img{
        width:auto;
        max-height:${props => props.height} ;
        margin:0;
        padding:0;
        position:relative;
        top:0;
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
      #RSociais{
          margin:0px;
          padding:0px;
          margin-right:10px;
      }
      #RSociais li{
        width:fit-content;
        padding:none;
      }
      #RSociais li img:hover{
        transform: scale(1.3)
      }
      #RSociais li img{
        height:35px;
        width:auto;
        transition: transform .2s;
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
        max-height:80px;

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
        .bemvindo{
          min-width:150px;
          line-height:1;
          margin:0;
          padding:0;
        }
      }
      @media screen and (max-width: 520px){
        width:100%;
        max-height:60px;
        position:fixed;
        top:0px;
        background-color:#FFF;
        display:flex;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
        box-shadow:1px 1px 2px 1px #333;
        z-index:9999;

        .logo{
          max-height:50px;
          padding:0;
          display:flex;
          justify-content: space-between;
          align-items: center;
        }
        #logo{
            width:fit-content;
            max-height:50px;
            margin:0;
            padding:0;
            margin-left:10px;
            position:relative;
            top:0;
        }
        #logo img{
            width:auto;
            max-height:50px;
            margin:0;
            padding:0;
            position:relative;
            top:0;
        }
        ul{
          list-style-type:none;
          display:flex;
          justify-content: space-between;
          align-items: center;
          align-content: space-between;
          width:fit-content;
          margin:0;
          padding:0;
        }
        #RSociais li{
          width:fit-content;
          padding:none;
          margin:0;
          padding:0;
        }

        #RSociais li img{
          height:30px;
          width:30px;
        }
        #RSociais .bemvindo{
          width:fit-content;
          line-height:1;
          margin:0;
          padding:0;
        }
        #RSociais .bemvindo b{
          display:block;
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
export const SpanMenu = styled.nav`
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
    padding:0;
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
@media screen and (max-width: 520px){
  top:60px;
  display:none;
  width:0px;
  height:100vh;
  background-color:#FFF;
  position:fixed;
  float:right;
  right:0px;
  z-index:99999;
  box-shadow:-1px 1px 2px 1px #333;
  li{
    width:100%;
    text-align:center;
    font-size:25px;
    height:70px;
    margin:0;
    padding:0;
    left:0;
    line-height:3;
  }
  a{
    width:100%;
    margin:0;
    padding:0;
    left:0;
    text-align:center;
  }
}
`;