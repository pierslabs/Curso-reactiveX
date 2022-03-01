
import { Observable, Observer} from 'rxjs'

const observer: Observer<any> = {
  next: value => console.log( 'siguiente [next]:', value),
  error: err => console.warn('error [erro]:', err),
  complete: () => console.info('complete')
}


const intervalo$ = new Observable<number>( subs =>  {
  // crear contador
  let count = 0;

  const interval = setInterval(()=> {
    // cada segundo
    count ++;
    subs.next(count)

  },1000);

  return ()=>{
    clearInterval(interval)
    console.log('intervalo destruido')
  }

});


const subscription1 = intervalo$.subscribe( num => console.log( 'Num:', num))
// const subscription2 = intervalo$.subscribe( num => console.log( 'Num:', num))
const subscription3 = intervalo$.subscribe( num => console.log( 'Num:', num))

setTimeout(()=>{
  // se ejecuta pasado 3s
  subscription1.unsubscribe()
  subscription3.unsubscribe()

  const subscription2 = intervalo$.subscribe( num => console.log( 'Num:', num))

},3000)