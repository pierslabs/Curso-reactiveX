import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, of } from "rxjs";


const url = 'https://httpbin.org/delay/1';


// ajax.get(url);

// ajax.delete(url,{
//   'mi-token': 'abcd'
// }).subscribe(console.log);

// ajax.post(url, {
//   id:1,
//   nombre: 'Pier'
// }, {
//   'mi-token': 'abcd'
// }).subscribe(console.log);

// ajax.put(url, {
//   id:1,
//   nombre: 'Pier'
// }, {
//   'mi-token': 'abcd'
// }).subscribe(console.log)


ajax({
  url,
  method: 'POST',
  headers: {
    'mi-token': 'ABjkhkj'
  },
  body:{
    id:1,
    nombre: 'Pier'
  }
}).subscribe(console.log)