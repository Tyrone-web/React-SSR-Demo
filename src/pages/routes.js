import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Personal from './Personal';

const Routeslist = () => {
    return <div>
        <ul>
            <li>
                <Link to='/'>首页</Link>
            </li>
            <li>
                <Link to='/personal'>个人中心页</Link>
            </li>
        </ul>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/personal' element={<Personal />}></Route>
        </Routes>
    </div>
}

export const routesConfig = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/personal',
        component: Personal
    }
]

export default Routeslist;