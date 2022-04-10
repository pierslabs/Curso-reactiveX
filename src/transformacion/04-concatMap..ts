import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";
import { cli } from "webpack";


const interval$ = interval(500).pipe( take(3));
const click$ = fromEvent( document, 'click');

// diferencia

// click$.pipe(
//   switchMap( ()=> interval$)
// )
// .subscribe( console.log)


// con conactMap se ejecutan los Observable uno detras de operators
// hasta que se completan todos los observables
click$.pipe(
  concatMap( ()=> interval$)
)
.subscribe( console.log)