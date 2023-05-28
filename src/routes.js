import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Personajes from './pages/Personajes'
import Planetas from './pages/Planetas'
import EspacioNaves from './pages/EspacioNaves'

const Routes = () => {
    return (
        <BrowserRouter basename="/proyectoFinal-api-react">
            <Route path="/" exact component={Home} />
            <Route path="/personajes" component={Personajes} />
            <Route path="/planetas" component={Planetas} />
            <Route path="/espacio-naves" component={EspacioNaves} />
        </BrowserRouter>
    )
}

export default Routes