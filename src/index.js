import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import appReducer, {initialState} from './reducers/appReducer'


import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(appReducer, initialState)

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
