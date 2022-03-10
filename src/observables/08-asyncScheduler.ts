import { asyncScheduler } from 'rxjs'

const saludar = () => console.log('hola mundo')
const saludar2 = (nombre) => console.log(`hola mundo ${nombre}`)

// despues de 2 segundos
// asyncScheduler.schedule(saludar2, 2000, state);

// hay que pasarle un estado en forma de objeto si necesitamos mas argumentos
// asyncScheduler.schedule(saludar2, 2000, 'Pedro');

const subs = asyncScheduler.schedule(
	function (state) {
		console.log('state', state)

		this.schedule(state + 1, 1000)
	},
	1000,
	0
)

// setTimeout( ()=> {
//   subs.unsubscribe();
// },6000)

asyncScheduler.schedule(() => subs.unsubscribe(), 6000)
