import { from } from 'rxjs'
import { map } from 'rxjs'
import { fromEvent } from 'rxjs'
import { range } from 'rxjs'
import { filter } from 'rxjs'

range(20, 30)
	.pipe(
		// impares
		filter((val, i) => {
			console.log('index', i)
			return val % 2 === 1
		})
	)
	.subscribe(console.log)

interface Personaje {
	tipo: string
	nombre: string
}

const personajes: Personaje[] = [
	{
		tipo: 'persona',
		nombre: 'Jhon McClain',
	},
	{
		tipo: 'heroe',
		nombre: 'Kratos',
	},
	{
		tipo: 'heroe',
		nombre: 'Connan',
	},
]

from<Personaje[]>(personajes)
	.pipe(filter((personaje) => personaje.tipo === 'heroe'))
	.subscribe(console.log)

// Encadenamiento de operadores
// operadores flujo : fromEvent => map => filter
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
	map((event) => event.code), //KeyboardEvent, string
	filter((key) => key === 'Enter')
)

keyup$.subscribe(console.log)
