class Counter {
    constructor(counter){
        if (Counter.instance){
            return Counter.instance;
        }
        this.counter = counter;
        Counter.instance = this;
    }

    incr() {
       this.counter ++;
    }
    clear () {
        this.counter = 0;
    }
}

export const count = new Counter(0);


// Счётчик и способы взаимодействия с ним, сделанный на основе singleton и класса конструктор