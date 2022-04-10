import { exhaustMap, fromEvent, interval, take } from 'rxjs'

const interval$ = interval(500).pipe(take(3))
const click$ = fromEvent(document, 'click')

// Mientras haya una subscripcion interna ejecutandose exhaustMap
// ignora todas las demas solo cuando haya acabado de ejecutarse
// la que este en proceso podra entrar otra
// se puede utilizar para evitar  los dobles submit por ejemplo
click$.pipe(exhaustMap(() => interval$)).subscribe(console.log)
