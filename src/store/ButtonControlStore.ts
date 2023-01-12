import { action, makeObservable, observable } from 'mobx';

class ButtonControlStore {

    constructor() {
        makeObservable(this, {
            setTextField1: action,
            setTextField2: action,
            textField1: observable,
            textField2: observable,
            clearTextField1: action,
            helloWorld: action,
            showNumber: action,
            showString: action
        });
    }

    textField1 = '' as string;
    textField2 = '' as string;

    setTextField1(value: string) {
        this.textField1 = value;
    }

    setTextField2(value: string) {
        this.textField2 = value;
    }

    clearTextField1() {
        this.textField1 = '';
    }

    helloWorld() {
        this.textField1 = 'Hello world!';
    }

    showNumber() {
        Number(this.textField2) ? alert(this.textField2) : alert('Строка не является числом!');
    }

    showString() {
        this.textField2 === '' ? alert('Строка пуста!') : alert(this.textField2);
    }

}

export default new ButtonControlStore();
