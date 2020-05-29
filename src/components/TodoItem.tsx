import React, { useState } from 'react';
import { TodoItemStore } from '../stores/TodoItemStore';
import { useStore } from '../helpers/useStore';
import '../styles/TodoItem.css';
import { IoIosClose } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';

interface Props {
    todo: TodoItemStore;
}

export const TodoItem = ({ todo }: Props) => {
    const todoList = useStore();

    return (
        <div className='todoitem-container'>
            {todo.isCompleted ? (
                <div className='todoitem-inactive'>
                    <div></div>
                    <div
                        className='todoitem-check'
                        onClick={() => todo.changeCompletedStatus()}
                    >
                        <FiCheckSquare />
                    </div>
                    <div className='todoitem-text'>
                        <p style={{ textDecoration: 'line-through' }}>
                            {todo.text}
                        </p>
                    </div>
                    <div className='todoitem-close-container'>
                        <div className='todoitem-close'>
                            <IoIosClose size='25px' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='todoitem-active'>
                    <div className='todoitem-drag-container'>
                        <div className='todoitem-drag'>
                            <BsThreeDotsVertical />
                            <BsThreeDotsVertical style={{ marginLeft: -10 }} />
                        </div>
                    </div>
                    <div
                        className='todoitem-check'
                        onClick={() => todo.changeCompletedStatus()}
                    >
                        <FiSquare />
                    </div>
                    <div className='todoitem-text'>
                        <p>{todo.text}</p>
                    </div>
                    <div className='todoitem-close-container'>
                        <div className='todoitem-close'>
                            <IoIosClose size='25px' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
