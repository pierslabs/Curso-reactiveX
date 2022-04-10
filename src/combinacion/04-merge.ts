import { fromEvent, merge, pluck } from "rxjs";


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

// la salida es la combinacion de ambas emisiones
merge( 
  keyup$.pipe( pluck('type')), 
  click$.pipe( pluck('type'))
).subscribe(console.log)