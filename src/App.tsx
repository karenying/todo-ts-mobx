import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { CompletedList } from './components/CompletedList';

const App = () => {
    const [title, setTitle] = useState('');

    return (
        <div className='App'>
            <div className='container'>
                <input
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <TodoList />
                <CompletedList />
            </div>
        </div>
    );
};

export default App;
