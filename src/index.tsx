import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './helpers/StoreProvider';
import { TodoListStore } from './stores/TodoListStore';

const todoList = new TodoListStore(['Learn TS', 'Learn MobX', 'Learn Context']);

ReactDOM.render(
    <StoreProvider value={todoList}>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
