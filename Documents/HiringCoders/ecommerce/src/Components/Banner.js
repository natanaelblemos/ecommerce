import { Banner } from "../Styles/bannerStyle"

export default function Ban(props){
    return (
         <Banner>
             <div>
                 <h1>
                     WoodWolf
                 </h1>
                    <h3>Archery</h3>
                    <p>
                        Arcos, flechas, escudos, equipamentos e muito mais! 
                    </p>
             </div>
             <ul>
                 <li>
                     <img src={props.img} alt='Banner da WoodWolf'/>
                 </li>
             </ul>
         </Banner>
    )
 } 