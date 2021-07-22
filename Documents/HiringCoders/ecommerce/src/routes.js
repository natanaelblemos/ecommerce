import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Eventos from './Pages/Eventos';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/eventos' component={Eventos}/>
            </Switch>
        </BrowserRouter>
    )
}