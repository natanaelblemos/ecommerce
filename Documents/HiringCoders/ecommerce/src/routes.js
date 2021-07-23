import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Eventos from './Pages/Eventos';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import ListaProdutos from './Pages/ListaProdutos';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/eventos' component={Eventos}/>
                <Route path='/login' component={Login}/>
                <Route path='/admin' component={Admin}/>
                <Route path='/produtos' component={ListaProdutos}/>
            </Switch>
        </BrowserRouter>
    )
}