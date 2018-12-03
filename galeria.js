let i=1;
let ant = document.getElementById('ant');
let next = document.getElementById('next');
let imag = document.getElementById("cajap");
let element = document.getElementById("id01");
let red = document.getElementById('red');
let dark = document.getElementById('dark');
let basic = document.getElementById('basic');

red.addEventListener('click', themered);
dark.addEventListener('click', themedark);
basic.addEventListener('click', themebasic);
window.addEventListener("keydown", detectartecla);

function themered(){
	document.getElementById("ant").style.backgroundColor = "Darkred";
	document.getElementById("next").style.backgroundColor = "Darkred";
	document.getElementById("ant").style.color = "white";
	document.getElementById("next").style.color = "white";
	document.getElementById("info").style.backgroundColor = "Darkred";
	document.body.style.backgroundColor = "Firebrick";
	document.getElementById("id01").style.color = "white";

}

function themedark(){
	document.getElementById("ant").style.backgroundColor = "black";
	document.getElementById("next").style.backgroundColor = "black";
	document.getElementById("ant").style.color = "white";
	document.getElementById("next").style.color = "white";
	document.getElementById("info").style.backgroundColor = "black";
	document.body.style.backgroundColor = "gray";
	document.getElementById("id01").style.color = "white";

}

function themebasic(){
	document.getElementById("ant").style.backgroundColor = "beige";
	document.getElementById("next").style.backgroundColor = "beige";
	document.getElementById("ant").style.color = "black";
	document.getElementById("next").style.color = "black";
	document.getElementById("info").style.backgroundColor = "peru";
	document.body.style.backgroundColor = "white";
	document.getElementById("id01").style.color = "peru";

}


function cambiarimagen(imagensource,x){
	let imagen = document.getElementById("cajap");
	imagen.src = imagensource;
	i=x;
	element.innerHTML = '   ';
}

ant.addEventListener('click', anterior);
next.addEventListener('click', siguiente);

function anterior(){
	if(i===1){
		i=9;
	}
	else{
		i--;
	}

imag.src = i + '.jpg';
element.innerHTML = '   ';
}

function siguiente(){
	if(i===9){
		i=1;
	}
	else{
		i++;
	}

imag.src = i + '.jpg';
element.innerHTML = '   ';
}


function mostrarnombre(){

	let info = document.getElementById(i);
	element.innerHTML = info.alt;

}

function detectartecla(e){
	if (e.code=="ArrowLeft"){
		anterior();
	}
	else if (e.code=="ArrowRight"){
		siguiente();
	}
}

function big(){

}

let modal = document.getElementById('myModal');


let imgbig = document.getElementById('cajap');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

imgbig.ondblclick = function(){
	let info = document.getElementById(i);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = info.alt;
    element.innerHTML = '  ';

}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}