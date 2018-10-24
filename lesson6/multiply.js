import { Subscriber } from 'rxjs'
import { map } from 'rxjs/operators'

// export class MultiplySubscriber extends Subscriber {
//   constructor(subscriber, number) {
//     super(subscriber)
//     this.number = number
//   }
//   _next(value) {
//     console.log('Multiply: ', this.number)
//     console.log('*:', value)
//     this.destination.next(value * this.number)
//   }
// }

export const multiply = number => map(value => value * number)