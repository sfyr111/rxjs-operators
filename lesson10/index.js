import { fromEvent, of, Subscriber } from 'rxjs'
import { scan, delay, mergeMap, switchMap } from 'rxjs/operators'

class MySwitchMapSubscriber extends Subscriber {

  constructor(sub, fn) {
    super(sub)
    this.fn = fn
    this.innerSubscription = null
  }

  _next(value) {
    console.log('outer', value)
    const o$ = this.fn(value)

    if (this.innerSubscription) {
      this.innerSubscription.unsubscribe()
    }

    this.innerSubscription = o$.subscribe({
      next: value => {
        console.log('-inner', value)
        this.destination.next(value)
      }
    })
  }
}

const mySwitchMap = fn => source => source.lift({
  call(sub, source) {
    source.subscribe(new MySwitchMapSubscriber(sub, fn))
  }
})

const observable$ = fromEvent(
  document,
  'click'
).pipe(
  scan(i => i + 1, 0),
  // switchMap(value => of(value).pipe(delay(500)))
  mySwitchMap(value => of(value).pipe(delay(500))) // mergeMap 源码实现
)

const subscribe = {
  next: value => {
    console.log('equal:', value)
    // 使用 mergeMap
    // of(value).pipe(delay(500)).subscribe({
    //   next: value => {
    //     console.log('inner', value)
    //   }
    // })
  },
  complete: () => console.log('=====done===='),
  error: () => console.log('error')
}

observable$.subscribe(subscribe)