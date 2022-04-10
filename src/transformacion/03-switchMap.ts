import { fromEvent, Observable } from 'rxjs'
import { debounceTime, map, mergeAll,  mergeMap,  pluck, switchMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { GithubUser } from '../interfaces/github-user.interfaces'
import { GithubUsersResp } from '../interfaces/github-users.interfaces'

// Refs
const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')
body.append(textInput, orderList)

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

// Helpers
const mostrarUsers = ( usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = '';

  for(const usuario of usuarios){
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;
    
    const anchor = document.createElement('a');
    anchor.text = 'user page';
    anchor.href = usuario.html_url;
    anchor.target = '_blank'

    li.append(img)
    li.append(usuario.login)
    li.append(anchor)
    
    orderList.append(li);
  }
}


input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck('target', 'value'),
  mergeMap(text => ajax.getJSON(
    `https://api.github.com/search/users?q=${text}`
  )),
  pluck('items')
)

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  pluck( 'target', 'value'),
  switchMap( texto => ajax.getJSON(url + texto))
).subscribe( console.log)

// cons switchMap la peticion anterior a la ultima se cancela a diferencia de 
// mergeMap que las realizaria todas