import { from, Subscriber, Observable } from 'rxjs'

const observable$ = from([1, 2, 3, 4, 5])

const subscribe = {
  next: value => console.log(value),
  complete: () => console.log('done'),
  error: () => console.log('error')
}

class DoubleSubscriber extends Subscriber {
  _next(value) {
    console.log('*:', value)
    this.destination.next(value * 2)
  }
}

// observable$.subscribe(new DoubleSubscriber(subscribe))

const o$ = new Observable()
o$.source = observable$
o$.operator = {
  call(sub, source) {
    source.subscribe(new DoubleSubscriber(sub))
  }
}
o$.subscribe(subscribe)
observable$.subscribe(subscribe) // 缺少了 source

// 用 pipe 解决
observable$.pipe(source => {
  // 不要用这种方法
  const o$ = new Observable()
  o$.source = observable$
  o$.operator = {
    call(sub, source) {
      source.subscribe(new DoubleSubscriber(sub))
    }
  }
  return o$
}).subscribe(subscribe)