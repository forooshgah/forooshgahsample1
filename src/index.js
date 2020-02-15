import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import authReducer from './store/reducers/auth';


const rootReducer = combineReducers({
    auth: authReducer
});

//const persistedState = loadState(); ali : if we want to load state from local storage s

//const store = createStore(
//  app,
//  persistedState
//);


const store = createStore(rootReducer);

//ali : if we want to load state from local storage s
//store.subscribe(() => {
//    saveState({
//      todos: store.getState().todos
//    });
//  });

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
