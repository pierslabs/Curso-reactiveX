
import { Observable, Observer} from 'rxjs'

const observer: Observer<any> = {
  next: value => console.log( 'siguiente [next]:', value),
  error: err => console.warn('error [erro]:', err),
  complete: () => console.info('complete')
}


// const osb$ = Observable.create()


// const obs$ = new Observable<string>( subscriber => {

//   subscriber.next('hola')
//   subscriber.next('MUNDO')


  // subscriber.next(1)
  // subscriber.next('MUNDO')

  // forzar el error
  // const a = undefined;
  // a.nombre = 'garbancito'

//   subscriber.complete()


//   subscriber.next('hola')
//   subscriber.next('MUNDO')

// })

// obs$.subscribe( observer)
// obs$.subscribe()

// obs$.subscribe(console.log)

//  obs$.subscribe(
//    valor =>  console.log('next:', valor),
//    error => console.warn('error:', error),
//    ()=> console.info('completado')
//  )



