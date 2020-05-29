import { createContext } from 'react';
import { TodoListStore } from '../stores/TodoListStore';

export const StoreContext = createContext<TodoListStore>({} as TodoListStore);
export const StoreProvider = StoreContext.Provider;
