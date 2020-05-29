import { useContext } from 'react';
import { StoreContext } from './StoreProvider';
import { TodoListStore } from '../stores/TodoListStore';

export const useStore = (): TodoListStore => useContext(StoreContext);
