// un operador es como conectar una pieza al flujo y esa
// pieza realiza la modificacion correspondiente a la salida del flujo

import { fromEvent } from 'rxjs'
import { mapTo } from 'rxjs'
import { pluck } from 'rxjs'
import { map } from 'rxjs'
import { range } from 'rxjs'

// range(1,5).pipe(
//   map<number, string>(val => (val * 10).toString() )
// )
// .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$.pipe(map((event) => event.code))

const keyupPluck$ = keyup$.pipe(
	// pluck('key'),
	pluck('target', 'baseURI')
)

const keyupMapTo$ = keyup$.pipe(
	// pluck('key'),
	mapTo('tecla presionad')
)

keyup$.subscribe(console.log)
keyupCode$.subscribe((code) => console.log('map', code))
keyupPluck$.subscribe((code) => console.log('pluck', code))
keyupMapTo$.subscribe((code) => console.log('mapTo', code))
