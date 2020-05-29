import React from 'react';
import { useStore } from '../helpers/useStore';
import { TodoItem } from './TodoItem';
import { useObserver } from 'mobx-react-lite';
import '../styles/CompletedList.css';

export const CompletedList = () => {
    const todoList = useStore();

    const num = todoList.completedTodos.length;
    console.log(num);
    const itemText = num === 1 ? 'item' : 'items';

    return useObserver(() =>
        todoList.completedTodos.length > 0 ? (
            <div className='completedlist-container'>
                <hr></hr>
                <p>
                    {num} Completed {itemText}
                </p>
                <div className='open-todos'>
                    {todoList.completedTodos.map((todo) => (
                        <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
                    ))}
                </div>
            </div>
        ) : null
    );
};
