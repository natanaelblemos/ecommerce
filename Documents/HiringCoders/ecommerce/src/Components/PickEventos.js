import { Link } from "react-router-dom";
import {Pickeventos, Ul} from "../Styles/eventsStyle";


export default function  PickEventos(){

const liEventos = [{
    data:'25'
    ,titulo:'Valhalla Night - Invasão Medieval e Yggdrasil'
    ,texto:"Hail, pessoALL! EVENTO GRATUITO ! <br /> Dia 25 de janeiro haverá um evento especialíssimo! Será o Valhalla Night! UM LUAU na praia de Ipanema!<br />Junção de 3 eventos em um só para aproveitarmos um lual bacana com picnic, música, atividades e muita diversão!<br />Valhalla Day Invasão Medieval RJ Encontro Viking Medieval RJ Yggdrasil - Estudos Nórdicos RJ ====================================<br /> O objetivo desses encontros é reunir pessoas com interesse na Cultura Nórdica: história, tradições, culinária, artesanato, lutas, etc. Vamos passar uma noite de Sábado mais uma vez juntos nos divertindo e compartilhando nossas pesquisas e visões sobre a Era Viking e Cultura Escandinava. Cada encontro tem um tema de discussão, picnic, jogos medievais, exposição de artesanato, treino de combate viking para todas as idades e luta entre os atletas mais experientes."
    ,link:'https://fb.me/e/1A6N9JH8X'
},{
    data:'15'
    ,titulo:'III Invasão Medieval no Game of Boards'
    ,texto:'Dia 15/12 vamos invadir a Game of Boards para conquistar os corações dos participantes com uma volta no tempo, para experimentarmos a magia, alegria e as demais especialidades da época.'
    ,link:'https://fb.me/e/19ZdNiFeJ'
},{
    data:'15'
    ,titulo:'IX Feira Medieval Carioca - Gratuita - A Maior do Brasil!'
    ,texto:' Atrações Musicais: Banda Tuatha de Danann, Banda Lyria, Banda Café Irlana, Banda Brazilian Pipers, Duo Magic, Loba Luna e Henrique, o Trovador.'
    ,link:'https://fb.me/e/KiZEYSfA'
}];


function PickEventosLi(propriedades){
    return(
        <Pickeventos>
            <fieldset>
                <legend>
                    {propriedades.data}
                </legend>
                <h2>
                    {propriedades.titulo}
                </h2>
                <p className='pickEventP'>
                    {propriedades.texto}
                </p>
                <Link to={propriedades.link}>Leia Mais</Link>
            </fieldset>
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