import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';



import './index.css';
import App from './components/App';
import reducers from './reducers';





import axios from 'axios';
window.axios = axios;

// ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//provider : react component to know redux store and update to App
ReactDOM.render(
<Provider store = {store}><App /></Provider>,
document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
