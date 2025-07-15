/*
    http://localhost:3000/          <Home/>
    http://localhost:3000/first     <First/>
    http://localhost:3000/second    <second/>

    * route : url의 매핑에 따라 다른 페이지 구성

    > npm install react-router-dom
*/

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css'
import First from './pages/first';
import Home from './pages/form';
import Second from './pages/second';
import Menu from './pages/Menu';

const App = () => {

    return(
        <div className='App'>
            <p>공통영역</p>
            <BrowserRouter>
                <Menu></Menu>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/first' element={<First/>}/>
                    <Route path='/second' element={<Second/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;