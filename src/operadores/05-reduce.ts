import { interval } from "rxjs";
import { take, reduce, tap} from "rxjs";
const numbers = [1,2,3,4,5]

const totalReducer = (acc: number, valorAcual: number) => {
	return acc + valorAcual;
}

const total = numbers.reduce(totalReducer, 0);

console.log('total arr', total);


interval(500).pipe(
	//completa el observable despues de la cantidad que se le indique
	take(5),
	tap(console.log),
	reduce(totalReducer)
)
.subscribe({
	next: val => console.log('next:',val),
	complete: ()=> console.log('complete')
});