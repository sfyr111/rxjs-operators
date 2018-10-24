// import { map } from 'rxjs/operators'
import { map } from './map'

export const multiply = number => map(value => value * number)