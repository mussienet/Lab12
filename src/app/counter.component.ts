import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component ({
  selector : 'counter-component',
  template : `
      <h2> Counter for increment and decrement </h2>
                <div>
                    <button (click) = "decrement()">-</button>
                    {{ counterValue }}
                    <button (click) = "increment()">+</button>
                </div>
              `,
 
   styles : [`div {width : 30%; margin: 0 auto; padding: 5px; border : 1px solid red; }`]

})
export class CounterComponent {
  counterValue = 0;

  constructor() {
    this.counterChange = new EventEmitter();
  }
  @Input() set counter(value : number) {
    if(value > 0) {
      this.counterValue = value;
    }
  }

  @Output() counterChange : EventEmitter<number>;

  decrement() {
    if(this.counterValue > 0) {
      this.counterValue -= 1;
      this.counterChanged(this.counterValue);

    }
    return false;
  }
  increment() {
    this.counterValue += 1;
    this.counterChanged(this.counterValue);
    return false;
  }

  private counterChanged(value : number) {
    this.counterChange.emit(value);
  }
}
