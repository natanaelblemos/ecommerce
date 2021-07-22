import styled from "styled-components";

const Pickeventos = styled.li`
    width:calc(100%/3);
    height:200px;
    background-color:#FFF;
    min-width:350px;
    diplay:flex;
    flex-wrap:wrap;
    text-align:center;

    h1, h2{
        width:fit-content;
        padding:5px;
        color:red;
        font-family: Arial;
        font-style:italic;
        font-size:52px;
        display:inline;
    }
    h2{
        font-size:30px;
        font-style:normal;
    }
    p{
        width:80%;
        margin-left:10%;
        text-align:center;
        font-family:calibri;
        font-size:20;
        color:#333;
        font-weight:bold;
        max-width: 250ch;
        overflow-y: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
    }
    a{
        font-family:calibri;
        font-weight:800;
    }
`;

const Ul = styled.ul`
    width:100%;
    min-height:200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    flex-wrap:wrap;
    margin:0;
    padding:0;
    list-style-type: none;
`;


export default function  PickEventos(){

const liEventos = [{
    data:'15'
    ,titulo:'Aulão de Arquearia'
    ,texto:'Um texto qualquer que vai ser apagado quando alcançar mais do que 250 caracteres, e como não fiquei contando enquanto digitava vou continuar digitando mais um pouco de palavras sem sentido'
    ,link:'https://fb.com/woodwolfarchery'
},{
    data:'15'
    ,titulo:'Aulão de Arquearia'
    ,texto:'Um texto qualquer que vai ser apagado quando alcançar mais do que 250 caracteres, e como não fiquei contando enquanto digitava vou continuar digitando mais um pouco de palavras sem sentido'
    ,link:'https://fb.com/woodwolfarchery'
},{
    data:'15'
    ,titulo:'Aulão de Arquearia'
    ,texto:'Um texto qualquer que vai ser apagado quando alcançar mais do que 250 caracteres, e como não fiquei contando enquanto digitava vou continuar digitando mais um pouco de palavras sem sentido'
    ,link:'https://fb.com/woodwolfarchery'
}];


function PickEventosLi(propriedades){
    return(
        <Pickeventos>
                <h1>
                    {propriedades.data}
                </h1>
                <h2>
                    {propriedades.titulo}
                </h2>
                <p className='pickEventP'>
                    {propriedades.texto}
                </p>
                <a href={propriedades.link}>Leia Mais</a>
        </Pickeventos>
    )
}

return(
    <Ul>
        {
            liEventos.map((itemAtual, i) => {
                let newTexto ='';
                if(itemAtual.texto.length > 100){
                    newTexto = itemAtual.texto.substring(0,100) + '...';
                }else{
                    newTexto = itemAtual.texto;
}
                return(
                    <PickEventosLi texto={newTexto} data={itemAtual.data} titulo={itemAtual.titulo} link={itemAtual.link} key={i}/>
                )
            })
        }
    
    </Ul>
)
}