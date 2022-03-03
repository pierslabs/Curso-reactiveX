import { fromEvent } from 'rxjs'


/**
 * eventos del DOM
 */



const src1$ = fromEvent<PointerEvent>(document, 'click') 
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup') 



const observer = {
  next: val => console.log('next', val)
}

//puntos en pantalla
// src1$.subscribe(ev => {
//   console.log(ev.x, ev.y)
// })

src1$.subscribe(({x, y}) => {
  console.log( x, y)
})

//teclas
src2$.subscribe(evento => console.log(evento.key))