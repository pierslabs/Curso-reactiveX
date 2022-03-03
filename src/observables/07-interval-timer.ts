import {interval, timer } from "rxjs";

const observer = {
  next: val => console.log('next', val),
  complete: ()=> console.log('complete')
}

const hoyEn5 = new Date()
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)

const interval$ = interval(1000);

// const timer$ = timer(2000)

//inicia la secuencia cada segundo pero después de pasar 2 segundos
//const timer$ = timer(2000, 1000)

//Programar en que momento se emite ese valor en base a este timer
//Es útil cuando tenemos una tarea que queremos ejecutar ejemplo a media noche
// o cuando se progrma alguna accion un el calendario un dia una hora se tiene que disparar una notificación
const timer$ = timer(hoyEn5)






//es asincrono
console.log('inicio')
// interval$.subscribe(observer);

timer$.subscribe(observer)
console.log('fin')

