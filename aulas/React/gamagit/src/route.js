import React from "react";
import { Routes,Route, BrowserRouter} from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' exact component={Home}/>//rota raiz */}
                <Route path='/' element={<Home/>} />
                <Route path='/repositories' element={<Repositories/>}/>
            </Routes>
        </BrowserRouter>
    )
}