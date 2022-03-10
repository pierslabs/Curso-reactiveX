import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any> = {
	next: (value) => console.log('siguiente [next]:', value),
	error: (err) => console.warn('error [erro]:', err),
	complete: () => console.info('complete'),
}

const intervalo$ = new Observable<number>((subs) => {
	const intervalID = setInterval(() => subs.next(Math.random()), 1000)

	return () => {
		clearInterval(intervalID)
		console.log('intervalo destruido')
	}
})

/*
**propiedades**
1- casteo multiple
2-También es un observer
3- Next erro y complete
*/

const subject$ = new Subject()
const intervalSubject = intervalo$.subscribe(subject$)

//las subscripciones son las mismas los humeros son iguales

//casteo
const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(() => {
	//como obseerver  es muy util permite insertar info al flujo de datos que
	//el observable está emitiendo
	//cuando la dat es producida por el observable en sí mismo es un COld Observable
	// cuando la data es producida fuera es un  Hot observable
	subject$.next(10)
	subject$.complete()

	intervalSubject.unsubscribe()
}, 3500)
