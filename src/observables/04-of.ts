import { of } from 'rxjs'

// const obs$ = of(1,2,3,4,5,6);


// const obs$ = of([1,2,3,4,5,6]);

const obs$ = of<any>([1,2],{a:3,b:4}, function(){}, Promise.resolve(true));


console.log(' del observable')
obs$.subscribe(
  next => console.log('next', next),
  null,
  ()=> console.log('terminamos la secuencia')
);

console.log('fin del observable')