// import { pipe } from 'rxjs'
import { map, filter } from 'rxjs/operators'
// import { map } from './map' // map 源码

const pipe = (...fns) => source =>
  fns.reduce((acc, fn) => fn(acc), source) // pipe 源码

export const multiply = number =>
  pipe(
    map(value => value * number),
    filter(value => value < 10)
  )