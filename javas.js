


// início do relógio digital
function relogio(){
    var data=new Date();
    var hor=data.getHours();
    var min=data.getMinutes();
    var seg=data.getSeconds();
    
    if(hor < 10){
        hor= "0" + hor;
    }
    if(min < 10){
        min= "0" + min;
    }
    if(seg < 10){
        seg= "0" + seg;
    }
    
    var horas=hor + ":" + min + ":" + seg;
    
    document.getElementById("rel").value=horas;
}

var timer=setInterval(relogio,1000);
// fim do relógio digital

const smallCups = document.querySelectorAll('.marcador-pequeno');
const liters = document.getElementById('minutos');
const percentage = document.getElementById('porcentagem');
const remained = document.getElementById('restante');

updateBigCup();

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
	// if the cup has the full class already 
	// and the nextSiblign doesn't have it
	// (so it's clicked again), remove the full class by decreasing the idx.
	// the idx is used bellow to tell how far 
	// to add the 'full' class
	if(smallCups[idx].classList.contains('full') &&
		!smallCups[idx].nextElementSibling.classList.contains('full')) {
		idx--;
	}
	
	smallCups.forEach((cup, idx2) => {
		// make all the cups until here 'full'
		if(idx2 <= idx) {
			cup.classList.add('full');
		// and the rest, empty by removing 'full'
		} else {
			cup.classList.remove('full');
		}
	});
	
	updateBigCup();
}

function updateBigCup() {
	const fullGlasses = document.querySelectorAll('.marcador-pequeno.full').length;
	const totalGlasses = smallCups.length;
	
	// hide the .percentage if the glass is empty
	if(fullGlasses === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = '0';
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${fullGlasses / totalGlasses * 202}px`;
		percentage.innerText = `${fullGlasses / totalGlasses * 100}%`;
	}
	
	if(fullGlasses === totalGlasses) {
		remained.style.visibility = 'hidden';
		remained.style.height = '0';
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${(40 - (5000 * fullGlasses / 1000))} Min`;
	}
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

