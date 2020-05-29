import { action, observable } from 'mobx';

export class TodoItemStore {
    id = Date.now();

    @observable text: string = '';
    @observable isCompleted: boolean = false;

    constructor(text: string) {
        this.text = text;
    }

    @action
    changeCompletedStatus = () => {
        this.isCompleted = !this.isCompleted;
    };

    @action
    updateText = (text: string) => {
        this.text = text;
    };
}
