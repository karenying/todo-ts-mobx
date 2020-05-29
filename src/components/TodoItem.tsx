import React, { useState } from 'react';
import { TodoItemStore } from '../stores/TodoItemStore';
import { useStore } from '../helpers/useStore';
import '../styles/TodoItem.css';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

interface Props {
    todo: TodoItemStore;
}

export const TodoItem = ({ todo }: Props) => {
    const todoList = useStore();

    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};
