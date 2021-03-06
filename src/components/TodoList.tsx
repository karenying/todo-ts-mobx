import React from 'react';
import { useStore } from '../helpers/useStore';
import { TodoItem } from './TodoItem';
import { useObserver } from 'mobx-react-lite';
import '../styles/TodoList.css';

export const TodoList = () => {
    const todoList = useStore();

    return useObserver(() => (
        <div className='open-todos'>
            {todoList.openTodos.map((todo) => (
                <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
            ))}
        </div>
    ));
};
