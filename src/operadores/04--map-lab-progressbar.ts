import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto  = document.createElement('div');
texto.innerHTML =`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere cursus venenatis. Maecenas eget magna arcu. Curabitur eget elit a lorem efficitur luctus. Morbi volutpat ultrices risus, id molestie orci elementum at. Aliquam erat volutpat. Fusce pellentesque fermentum ante, in consectetur ante commodo ac. Nunc sem ipsum, ornare non metus eu, bibendum aliquam lectus. Donec at malesuada massa, eget tempus quam. Aenean urna arcu, aliquam in tortor et, pulvinar interdum ipsum. Vestibulum et dui odio.
<br></br>
Curabitur a felis nibh. Fusce luctus, sem vel ultrices placerat, mauris orci aliquet magna, facilisis ultrices tellus tellus eu ante. Nulla vitae purus sed lorem pretium sollicitudin id sed diam. Sed interdum dui bibendum quam consectetur gravida. Proin in lorem bibendum, molestie tellus fringilla, blandit leo. Donec diam mi, venenatis eget dapibus eget, efficitur quis ex. Nam sagittis dignissim orci, consectetur eleifend tortor sollicitudin a. Nulla ullamcorper volutpat nisi, at consequat erat suscipit nec. Nam imperdiet ullamcorper ante, nec venenatis sem scelerisque sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus volutpat odio, in eleifend nunc feugiat a. Morbi porta, turpis vitae dictum placerat, nisi magna dapibus sapien, eu ultricies ipsum augue eget felis. Donec malesuada tempus sodales. In non dolor vel enim venenatis suscipit. Pellentesque in tristique tellus. Nunc dignissim, leo eu pretium commodo, nisi nibh egestas lacus, eu sagittis tortor lacus non tellus.
<br></br>
Aliquam erat volutpat. Suspendisse potenti. Vivamus vehicula, justo ut hendrerit suscipit, justo est volutpat nulla, non dictum ante nunc id velit. Curabitur a justo sem. Aliquam porta massa eget quam ultrices, ut gravida leo vehicula. Quisque varius fringilla lorem, eu tempus libero. Nulla et turpis ut dolor ultrices tempus id non lectus. Nam lacinia congue eros vel suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br></br>
Aliquam consectetur tortor eu pretium consequat. Aenean id mauris placerat dui sollicitudin sollicitudin nec ac sapien. Curabitur maximus ipsum a elit scelerisque, ac facilisis dui lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac tincidunt magna, nec lobortis risus. Morbi et euismod enim. In vitae metus at magna ornare sodales vel ut ligula. Quisque bibendum maximus ligula et efficitur. Cras ultrices nibh a magna accumsan, quis pharetra nisi posuere. Duis gravida vehicula consectetur. Donec mollis ornare lorem, eu posuere massa volutpat nec. Cras facilisis elementum nibh consectetur faucibus. Maecenas in ex accumsan purus vulputate accumsan. Quisque leo nulla, eleifend non nisi at, dapibus molestie orci. Vivamus id felis pellentesque, ornare nisi non, sagittis massa.
<br></br>
Donec luctus lectus vitae ipsum malesuada faucibus. Aliquam volutpat, tellus ut sagittis tristique, ligula eros pretium lorem, laoreet lobortis ante urna eget urna. Nullam sapien libero, pharetra eu condimentum id, hendrerit et mi. Maecenas sed fringilla odio. Cras tempus ligula nec finibus hendrerit. Integer tellus mauris, faucibus vitae commodo non, facilisis vel arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lacinia, ex nec dignissim finibus, felis nulla porta elit, eu semper lacus turpis vitae sem. In odio enim, sollicitudin eget porta id, vulputate quis metus. Ut nec molestie eros. Aliquam in consectetur risus. Morbi sagittis elit arcu, vel finibus tellus venenatis id.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere cursus venenatis. Maecenas eget magna arcu. Curabitur eget elit a lorem efficitur luctus. Morbi volutpat ultrices risus, id molestie orci elementum at. Aliquam erat volutpat. Fusce pellentesque fermentum ante, in consectetur ante commodo ac. Nunc sem ipsum, ornare non metus eu, bibendum aliquam lectus. Donec at malesuada massa, eget tempus quam. Aenean urna arcu, aliquam in tortor et, pulvinar interdum ipsum. Vestibulum et dui odio.
<br></br>
Curabitur a felis nibh. Fusce luctus, sem vel ultrices placerat, mauris orci aliquet magna, facilisis ultrices tellus tellus eu ante. Nulla vitae purus sed lorem pretium sollicitudin id sed diam. Sed interdum dui bibendum quam consectetur gravida. Proin in lorem bibendum, molestie tellus fringilla, blandit leo. Donec diam mi, venenatis eget dapibus eget, efficitur quis ex. Nam sagittis dignissim orci, consectetur eleifend tortor sollicitudin a. Nulla ullamcorper volutpat nisi, at consequat erat suscipit nec. Nam imperdiet ullamcorper ante, nec venenatis sem scelerisque sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus volutpat odio, in eleifend nunc feugiat a. Morbi porta, turpis vitae dictum placerat, nisi magna dapibus sapien, eu ultricies ipsum augue eget felis. Donec malesuada tempus sodales. In non dolor vel enim venenatis suscipit. Pellentesque in tristique tellus. Nunc dignissim, leo eu pretium commodo, nisi nibh egestas lacus, eu sagittis tortor lacus non tellus.
<br></br>
Aliquam erat volutpat. Suspendisse potenti. Vivamus vehicula, justo ut hendrerit suscipit, justo est volutpat nulla, non dictum ante nunc id velit. Curabitur a justo sem. Aliquam porta massa eget quam ultrices, ut gravida leo vehicula. Quisque varius fringilla lorem, eu tempus libero. Nulla et turpis ut dolor ultrices tempus id non lectus. Nam lacinia congue eros vel suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br></br>
Aliquam consectetur tortor eu pretium consequat. Aenean id mauris placerat dui sollicitudin sollicitudin nec ac sapien. Curabitur maximus ipsum a elit scelerisque, ac facilisis dui lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac tincidunt magna, nec lobortis risus. Morbi et euismod enim. In vitae metus at magna ornare sodales vel ut ligula. Quisque bibendum maximus ligula et efficitur. Cras ultrices nibh a magna accumsan, quis pharetra nisi posuere. Duis gravida vehicula consectetur. Donec mollis ornare lorem, eu posuere massa volutpat nec. Cras facilisis elementum nibh consectetur faucibus. Maecenas in ex accumsan purus vulputate accumsan. Quisque leo nulla, eleifend non nisi at, dapibus molestie orci. Vivamus id felis pellentesque, ornare nisi non, sagittis massa.
<br></br>
Donec luctus lectus vitae ipsum malesuada faucibus. Aliquam volutpat, tellus ut sagittis tristique, ligula eros pretium lorem, laoreet lobortis ante urna eget urna. Nullam sapien libero, pharetra eu condimentum id, hendrerit et mi. Maecenas sed fringilla odio. Cras tempus ligula nec finibus hendrerit. Integer tellus mauris, faucibus vitae commodo non, facilisis vel arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lacinia, ex nec dignissim finibus, felis nulla porta elit, eu semper lacus turpis vitae sem. In odio enim, sollicitudin eget porta id, vulputate quis metus. Ut nec molestie eros. Aliquam in consectetur risus. Morbi sagittis elit arcu, vel finibus tellus venenatis id.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere cursus venenatis. Maecenas eget magna arcu. Curabitur eget elit a lorem efficitur luctus. Morbi volutpat ultrices risus, id molestie orci elementum at. Aliquam erat volutpat. Fusce pellentesque fermentum ante, in consectetur ante commodo ac. Nunc sem ipsum, ornare non metus eu, bibendum aliquam lectus. Donec at malesuada massa, eget tempus quam. Aenean urna arcu, aliquam in tortor et, pulvinar interdum ipsum. Vestibulum et dui odio.
<br></br>
Curabitur a felis nibh. Fusce luctus, sem vel ultrices placerat, mauris orci aliquet magna, facilisis ultrices tellus tellus eu ante. Nulla vitae purus sed lorem pretium sollicitudin id sed diam. Sed interdum dui bibendum quam consectetur gravida. Proin in lorem bibendum, molestie tellus fringilla, blandit leo. Donec diam mi, venenatis eget dapibus eget, efficitur quis ex. Nam sagittis dignissim orci, consectetur eleifend tortor sollicitudin a. Nulla ullamcorper volutpat nisi, at consequat erat suscipit nec. Nam imperdiet ullamcorper ante, nec venenatis sem scelerisque sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus volutpat odio, in eleifend nunc feugiat a. Morbi porta, turpis vitae dictum placerat, nisi magna dapibus sapien, eu ultricies ipsum augue eget felis. Donec malesuada tempus sodales. In non dolor vel enim venenatis suscipit. Pellentesque in tristique tellus. Nunc dignissim, leo eu pretium commodo, nisi nibh egestas lacus, eu sagittis tortor lacus non tellus.
<br></br>
Aliquam erat volutpat. Suspendisse potenti. Vivamus vehicula, justo ut hendrerit suscipit, justo est volutpat nulla, non dictum ante nunc id velit. Curabitur a justo sem. Aliquam porta massa eget quam ultrices, ut gravida leo vehicula. Quisque varius fringilla lorem, eu tempus libero. Nulla et turpis ut dolor ultrices tempus id non lectus. Nam lacinia congue eros vel suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br></br>
Aliquam consectetur tortor eu pretium consequat. Aenean id mauris placerat dui sollicitudin sollicitudin nec ac sapien. Curabitur maximus ipsum a elit scelerisque, ac facilisis dui lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac tincidunt magna, nec lobortis risus. Morbi et euismod enim. In vitae metus at magna ornare sodales vel ut ligula. Quisque bibendum maximus ligula et efficitur. Cras ultrices nibh a magna accumsan, quis pharetra nisi posuere. Duis gravida vehicula consectetur. Donec mollis ornare lorem, eu posuere massa volutpat nec. Cras facilisis elementum nibh consectetur faucibus. Maecenas in ex accumsan purus vulputate accumsan. Quisque leo nulla, eleifend non nisi at, dapibus molestie orci. Vivamus id felis pellentesque, ornare nisi non, sagittis massa.
<br></br>
Donec luctus lectus vitae ipsum malesuada faucibus. Aliquam volutpat, tellus ut sagittis tristique, ligula eros pretium lorem, laoreet lobortis ante urna eget urna. Nullam sapien libero, pharetra eu condimentum id, hendrerit et mi. Maecenas sed fringilla odio. Cras tempus ligula nec finibus hendrerit. Integer tellus mauris, faucibus vitae commodo non, facilisis vel arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lacinia, ex nec dignissim finibus, felis nulla porta elit, eu semper lacus turpis vitae sem. In odio enim, sollicitudin eget porta id, vulputate quis metus. Ut nec molestie eros. Aliquam in consectetur risus. Morbi sagittis elit arcu, vel finibus tellus venenatis id.
`


const body = document.querySelector('body')
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion calculo
const calcularProcentajeScroll = (event) => {
 const { scrollTop, scrollHeight, clientHeight} = event.target.documentElement;
	return ( scrollTop / (scrollHeight - clientHeight)) * 100;
}
//streams
const scroll$ = fromEvent( document, 'scroll');

// scroll$.subscribe( console.log)


const progress$ = scroll$.pipe(
	// map( event => calcularProcentajeScroll(event) )
	map( calcularProcentajeScroll ),
	tap(console.log)
);

progress$.subscribe( porcentaje => {
	progressBar.style.width = `${porcentaje}%`
})
