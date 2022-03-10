// Mas ejemplos de of y from
import { of, from } from 'rxjs'

/**
 * of = toma argumentos y genera una secuencia
 * from = obserbable en base a un  arr, promise, iterable,observable
 */

const obs = {
	next: (val) => console.log('next', val),
	complete: () => console.log('complete'),
}

// ----------------------------------------------------------------
//  iterable
const miGenerador = function* () {
	yield 1
	yield 2
	yield 3
	yield 4
	yield 5
}

const miIterable = miGenerador()

// ejemplo
// for (let id of miIterable){
//   console.log(id)
// }

// la ventaja de ser un obserbable es que permite trabajar con operadores
// transformar la data y el flujo de informacion hacerlo secuencial y más claro
from(miIterable).subscribe(obs)
// ---------------------------------------------------------------------

// -------------------------------------------------------------------
// const src$ = from([1,2,3,4,5,6]);

// algo parecido al from
// const src$ = of(...[1,2,3,4,5,6]);
// const src$ = of([1,2,3,4,5,6]);

// const src$ = from('pedro');
//  const src$ = of('pedro');

// Como se podría hacer
// const src$ = from( fetch('https://jsonplaceholder.typicode.com/posts'));

// src$.subscribe( async(resp) => {
//   console.log(resp.ok);
//   const dataRes = await resp.json();
//   console.log(dataRes);

// });
// -------------------------------------------------------------------

// src$.subscribe( obs);
