//Editor Juan Arley Herran Ducuara


const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});








/* videos */
var popular=[
	{ur:"img/p1.jpg",nombre:"The Flash"},
	{ur:"img/p2.jpg",nombre:"El hombre que cayó a la Tierra"},
	{ur:"img/p3.jpg",nombre:"Yaksha: Ruthless Operations"},
	{ur:"img/p4.jpg",nombre:"Planeta Prehistórico"},
];
var gratis=[
	{ur:"img/g1.jpg",nombre:"Titanic II"},
	{ur:"img/g2.jpg",nombre:"El soldado de Dios"},
	{ur:"img/g3.jpg",nombre:"John Rambo"},
	{ur:"img/g4.jpg",nombre:"Contención"},
];

var avanze=[
	{ur:"img/av1.jpg",nombre:"Obi-Wan Kenobi"},
	{ur:"img/av2.jpg",nombre:"Chip y Chop: Los guardianes rescatadores"},
	{ur:"img/av3.jpg",nombre:"Caballero luna"},

];

var videop=[{url:"video/p1.mp4"},
            {url:"video/p2.mp4"},
						{url:"video/p3.mp4"},
						{url:"video/p4.mp4"}];

var videog=[{url:"video/g1.mp4"},
            {url:"video/g2.mp4"},
						{url:"video/g3.mp4"},
						{url:"video/g4.mp4"}];

var videoav=[{url:"video/av1.mp4"},
            {url:"video/av2.mp4"},
						{url:"video/av3.mp4"}];






for (var i = 1; i <=3; i++) {
	if (i==1)create(popular,videop,"pl1");
		if (i==2)create(gratis,videog,"pl2");
			if (i==3)create(avanze,videoav,"pl3");

}

;
function create(array,array2,element) {


for (var i in array) {
	ob=array[i]
	vv=array2[i];
	document.getElementById(element).innerHTML+=`


			 <div class="im">
					 <div class="imgs" ><img src="${ob.ur}" onclick="videoVer('${vv.url}','${ob.nombre}');"></div>
					<div class="titles"><span>${ob.nombre}</span></div>

				</div>
	`;
}


}

function focus(element) {
	document.getElementById(element).focus();
}





function cerrarVideo(){

	document.getElementById('viewPeli').style.display="none";
	var r= document.getElementById('reproductor');
	r.pause();

}

function abrirVideo(){

	document.getElementById('viewPeli').style.display="block";

}

function videoVer(url,tl) {
 var t=	document.getElementById('tll');
	 t.innerHTML=` <marquee>${tl}</marquee>`;

	console.log(url);
	/*
		var r= document.getElementById('reproductor');
		r.src=url;

		*/
		var source = document.querySelector('#reproductor source');
		var video = document.querySelector('#reproductor');
		
		// Cambia el valor del atributo "src" de la etiqueta source
		source.setAttribute('src', url);
		
		// Actualiza el reproductor de video con la nueva URL del video
		video.load();


	// Espera a que el video se cargue completamente antes de reproducirlo
video.addEventListener('loadedmetadata', function() {
	video.play();
  });


	abrirVideo()

}
