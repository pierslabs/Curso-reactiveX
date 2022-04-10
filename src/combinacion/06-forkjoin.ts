import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1,2,3,4);// dev 4
const intervalo$ = interval(1000).pipe( take(3)); //dev 2

const letras$ = of('a', 'b', 'c').pipe( delay(3500)); //dev 3


// forkJoin(
//   numeros$,
//   intervalo$,
//   letras$,
// ). subscribe( console.log)

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$,
//   ).subscribe(res => {
//     console.log('numeros:', res[0]),
//     console.log('intervalo:', res[1]),
//     console.log('letras:', res[2])
//   }) 

  forkJoin({
    numeros$,
    intervalo$,
    letras$,
  }).subscribe(res => {
    console.log(res)
  }) 