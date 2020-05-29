import { action, computed, observable } from 'mobx';
import { TodoItemStore } from './TodoItemStore';

export class TodoListStore {
    @observable.shallow list: TodoItemStore[] = [];

    constructor(todos: string[]) {
        todos.forEach(this.addTodo);
    }

    @action
    addTodo = (text: string) => {
        this.list.push(new TodoItemStore(text));
    };

    @action
    removeTodo = (todo: TodoItemStore) => {
        this.list.splice(this.list.indexOf(todo), 1);
    };

    @computed
    get finishedTodos(): TodoItemStore[] {
        return this.list.filter((todo) => todo.isCompleted);
    }

    @computed
    get openTodos(): TodoItemStore[] {
        return this.list.filter((todo) => !todo.isCompleted);
    }
}
