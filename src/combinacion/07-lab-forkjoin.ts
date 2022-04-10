import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'klerith'

forkJoin({
  usuario: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}`
  ),
  repos: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/repos`
  ),
  gists: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/gists`
  )
}).pipe(
  catchError( err => of(err.message))
)
.subscribe( console.log)

// para manejar el error independiente de cada uno

// forkJoin({
//   usuario: ajax.getJSON(
//     `${GITHUB_API_URL}/${GITHUB_USER}`
//   ).pipe......,
//   repos: ajax.getJSON(
//     `${GITHUB_API_URL}/${GITHUB_USER}/repos`
//   ).pipe......,
//   gists: ajax.getJSON(
//     `${GITHUB_API_URL}/${GITHUB_USER}/gists`
//   ).pipe......
// })
// .subscribe( console.log)