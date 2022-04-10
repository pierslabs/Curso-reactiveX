import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, pluck } from 'rxjs/operators';


const url = 'https://api.github.com/users?per_page=5';



// const manejaErrores = ( response: Response ) => {
//   if( !response.ok) {
//     throw new Error(response.statusText)
//   }
//   return response;
// }

// const fetchPromesa = fetch(url);

// fetchPromesa
//   .then( manejaErrores)
//   .then( res =>  res.json())
//   .then(data => console.log('data', data))
//   .catch( err => console.warn( 'error', err))


const manejaErrores =  (error: AjaxError )=> {
  console.warn('error en:', error.message);
  return of([])
}

  ajax(url).pipe(
    pluck('response'),
    catchError(manejaErrores)
  ).subscribe(users => console.log( 'usuarios:', users))