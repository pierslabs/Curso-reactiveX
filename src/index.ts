
import { Observable, Observer, Subject} from 'rxjs'

const observer: Observer<any> = {
  next: value => console.log( 'siguiente [next]:', value),
  error: err => console.warn('error [erro]:', err),
  complete: () => console.info('complete')
}

const intervalo$ =  new Observable<number>( subs => {


  const intervalID = setInterval(
      ()=> subs.next(Math.random()
    )
    ,3000)
})


/*
**propiedades**
1- casteo multiple
2-También es un observer
3- Next erro y complete
*/

const subject$ = new Subject();
intervalo$.subscribe(subject$)

//las subscripciones son las mismas los humeros son iguales

const subs1 = subject$.subscribe(rnd => console.log('subs1',rnd))
const subs2 = subject$.subscribe(rnd => console.log('subs2',rnd))