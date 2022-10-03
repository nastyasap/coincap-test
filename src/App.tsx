import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {MainContainer} from './components/Main/MainContainer';
import {CurrencyPageContainer} from './components/Main/Table/TableRows/CurrencyPage/CurrencyPageContainer';

function App() {
    return (
        <div>
            <HeaderContainer/>
            <Routes>
                <Route path={'/'} element={<MainContainer/>}/>
                <Route path={'/:id/:interval'} element={<CurrencyPageContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
