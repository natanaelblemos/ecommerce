import { Link } from "react-router-dom";
import item1 from '../img/item1.jpg';
import item2 from '../img/item2.jpg';
import item3 from '../img/item3.png';
import { Moreviews } from "../Styles/moreViewsStyle";


export default function MoreViews(){
    return(

        <Moreviews>

                <h1>Itens Mais Visitados</h1>

            <ul>
                <li>
                    <img src={item1} alt='item1'/>
                    <h3>TakeDown de Madeira</h3>
                    <p>
                        Modelo: Takedown <br/>
                        Tipo: Longbow <br/>
                        Componentes: Madeira <br/>
                        Peso: 1.5 kg <br/>
                        Comprimento: 1,71 m <br/>
                        Libra: 29 lbs - 28'<br/>
                        <Link to='https://woodwolf.com'>Ver Este</Link>
                    </p>
                </li>
         
                <li>
                    <img src={item2} alt='item1'/>
                    <h3>LongBow de Madeira</h3>
                    <p>
                        Modelo: Modelo <br/>
                        Tipo: Longbow <br/>
                        Componentes: Madeira<br/>
                        Peso: 1.5 kg <br/>
                        Comprimento: 1,61 m <br/>
                        Libra: 24 lbs - 28'<br/>
                            <Link to='https://woodwolf.com'>Ver Este</Link>
                    </p>
                </li>
         
                <li>
                    <img src={item3} alt='item1'/>
                    <h3>TakeDown de Madeira</h3>
                    <p>
                        Modelo: Takedown <br/>
                        Tipo: Longbow <br/>
                        Componentes: Madeira <br/>
                        Peso: 1.5 kg <br/>
                        Comprimento: 1,66 m <br/>
                        Libra: 22 lbs - 28'<br/>
                        <Link to='https://woodwolf.com'>Ver Este</Link>
                    </p>
                </li>
            </ul>
        </Moreviews>

    )
}