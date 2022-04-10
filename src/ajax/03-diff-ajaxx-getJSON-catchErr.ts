import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";


const url = 'https://httpbinvv.org/delay/1';

const obs$ = ajax.getJSON( url);
const obs2$ = ajax( url);

const manejaError = (res: AjaxError) => {
  console.warn ('error: ', res.message);
  return of({
    ok: false,
    usuarios: []
  })
}

obs$.pipe(
  catchError( manejaError)
).subscribe( data => console.log( 'getJSON: ', data))


obs2$.pipe(
  catchError( manejaError)
).subscribe( data => console.log( 'Ajax: ', data))

// obs$.pipe(
//   catchError( manejaError)
// ).subscribe({
//   next: val =>  console.log('value: ', val),
//   error: err => console.warn('error:', err),
//   complete: ()=> console.log('completado')
// })