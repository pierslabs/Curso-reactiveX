
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

  setTimeout(()=>{
    subs.complete()
  }, 2500);

  return ()=>{
    clearInterval(interval)
    console.log('intervalo destruido')
  }

});


const subscription1 = intervalo$.subscribe( observer)
const subscription2 = intervalo$.subscribe( observer)
const subscription3 = intervalo$.subscribe( observer)

subscription1.add(subscription2)
subscription2.add(subscription3)

setTimeout(()=>{
  subscription1.unsubscribe()

},3000)