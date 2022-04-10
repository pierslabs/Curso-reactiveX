import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

//Helper

const peticionHttpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
  pluck('response', 'token'),
  catchError( err => of('erorr xxx'))
)
//  crear form 
const form = document.createElement('form');

const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')

// config

inputEmail.type ='email';
inputEmail.placeholder ='email';
inputEmail.value ='eve.holt@reqres.in';

inputPass.type ='password';
inputPass.placeholder ='password';
inputPass.value ='cityslicka';

submitBtn.innerHTML = 'Submit';


form.append(inputEmail, inputPass,submitBtn);
document.querySelector('body').append(form);

// Streams todo esto se podria poner en algun servicio o ubicacion global y solo subscribirse en el lugar que se quiera

const submitForm$ = fromEvent<Event>( form, 'submit').pipe(
  tap(e => e.preventDefault()),
  map( ev => ({
    email: ev.target[0].value,
    password: ev.target[1].value
  })),
  // mergeMap( peticionHttpLogin)
  // switchMap(peticionHttpLogin)
  exhaustMap(peticionHttpLogin)

)
//-------------------------------------------------------

submitForm$.subscribe( token => {
  console.log(token)
})