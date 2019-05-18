import * as rxjs from 'rxjs';

class CounterBloc {

    constructor(){
        this.counterSubject = new rxjs.BehaviorSubject(0);
    }

    increment = () =>{
        let count = this.counterSubject.getValue() + 1;
        this.counterSubject.next(count);
    };

    decrement = () => {
        let count = this.counterSubject.getValue() - 1;
        this.counterSubject.next(count);
    };

    error = () => {
        this.counterSubject.error("An error simulation");
    };

    getCounterSubject = () => {
        return this.counterSubject;
    };

}

export default CounterBloc;
