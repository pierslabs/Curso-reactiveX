import { asyncScheduler, of, range } from 'rxjs'

// const src$ = of(1,2,3,4,5,6,7,8,9);

// no significa que sea del 1 al 5  son emisiones
//
// const src$ = range(-5,15);

// Para hacerla asyncrono
const src$ = range(1, 5, asyncScheduler)

console.log('inicio')

src$.subscribe(console.log)

console.log('fin')
