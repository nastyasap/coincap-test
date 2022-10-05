import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HeaderContainer} from './pages/Header/HeaderContainer';
import {MainContainer} from './pages/Main/MainContainer';
import {CurrencyPageContainer} from './pages/Currency/CurrencyPageContainer';

function App() {
    return (
        <div>
            <HeaderContainer/>
            <Routes>
                <Route path={'/'} element={<MainContainer/>}/>
                <Route path={'/:id'} element={<CurrencyPageContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
