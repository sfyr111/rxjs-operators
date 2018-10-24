import { from } from 'rxjs'

const observable$ = from([1, 2, 3, 4, 5])

// observable$.subscribe(value => {
//   console.log(value)
// })

const subscribe = {
  next: value => console.log(value),
  complete: () => console.log('done'),
  error: () => console.log('error')
}

observable$.subscribe(subscribe)