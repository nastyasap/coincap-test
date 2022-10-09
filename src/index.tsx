import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import {ModalsProvider} from './components/Modals/ModalsProvider';
import {Global} from './components/common/CommonStyles';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ModalsProvider>
                    <HashRouter>
                        <Global/>
                        <App/>
                    </HashRouter>
                </ModalsProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
