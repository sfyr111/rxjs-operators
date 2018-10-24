import { from } from 'rxjs'
import { MultiplySubscriber } from './multiply'

const observable$ = from([1, 2, 3, 4, 5])

const subscribe = {
  next: value => console.log('equal:', value),
  complete: () => console.log('=====done===='),
  error: () => console.log('error')
}

// 使用 lift
const multiply = number => source => source.lift({
  call(sub, source) {
    source.subscribe(new MultiplySubscriber(sub, number))
  }
})
// 用 pipe 解决
observable$.pipe(multiply(3)).subscribe(subscribe)
observable$.pipe(multiply(4)).subscribe(subscribe)