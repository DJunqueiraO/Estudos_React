import { create } from "zustand";

type CounterParams = {
  (partial: Counter | Partial<Counter> | ((state: Counter) => Counter | Partial<Counter>), replace?: false | undefined): void; 
  (state: Counter | ((state: Counter) => Counter), replace: true): void;
}

class Counter {

  set: CounterParams
  value = 0
  incrementing = false

  constructor(set: CounterParams) {
    this.set = set
  }

  increment = () => {
    this.set((counter: Counter) => ({ value: counter.value + 1 }));
  }

  incrementLateBy = async (millis: number) => {
    await new Promise(() => {
      setTimeout(() => {
        this.increment(); 
      }, millis)
    });
  }

  incrementOneAtATime = async (millis: number) => {
    console.log(this.incrementing)
    if (this.incrementing) {
      return;
    }
    this.incrementing = true;
    await new Promise(() => {
      setTimeout(() => {
        this.increment(); 
        this.incrementing = false
      }, millis)
    });
  }

  incrementLateByOne = async () => {
    this.incrementLateBy(1000);
  }

  decrement = () => {
    this.set((counter: Counter) => ({ value: counter.value - 1 }));
  }
};

export const useCounterStore = create<Counter>((set: CounterParams) => (new Counter(set)));