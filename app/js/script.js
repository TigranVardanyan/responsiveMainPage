//main vars
var pages = document.querySelector('.navbar ul');
var link = document.querySelectorAll('.navbar ul li');
var page = document.querySelectorAll('.page');
var home = document.querySelectorAll('.home');
var portfolio = document.querySelectorAll('.portfolio');
var service = document.querySelectorAll('.service');
var resume = document.querySelectorAll('.resume');
var blog = document.querySelectorAll('.blog');
var contact = document.querySelectorAll('.contact');
var extra = document.querySelectorAll('.extra');
var headerNav = document.querySelector('.header-nav');
var cross = document.querySelector('.cross');
var navUlLi = document.querySelectorAll('.navbar ul li');
var navUl = document.querySelector('.navbar ul');
var wrapper = document.querySelector('.wrapper');
var windowSize;
// aside vars
var switcher = document.getElementById('switch');
var pageColor = document.querySelector('aside div.page_color');
var cog = document.querySelector('.fa-cog');
var colors = document.querySelector('.page_color .colors');
var toolbarColor = document.querySelectorAll('.page_color .colors .color');
var cChange = document.querySelectorAll('.cChange');

window.onresize = resize;
document.addEventListener("DOMContentLoaded", resize);


function resize() {
	windowSize = document.documentElement.clientWidth;
	if(windowSize < 992) {
		wrapper.classList.add('container-fluid');
		wrapper.classList.remove('container');
	} else {
		wrapper.classList.remove('container-fluid');
		wrapper.classList.add('container');
	}
}

//main scripts
window.onscroll = function() {
	if(window.pageYOffset > 25) {
		headerNav.classList.add('sticked');
	} else {
		headerNav.classList.remove('sticked');
	}
}

cross.addEventListener('click' , () => {
	navUl.classList.toggle('open');
	for(var i = 0; i < navUlLi.length; i++) {
		navUlLi[i].classList.toggle('hide');
	}
})




// aside colors



switcher.addEventListener('click' , ()=> pageColor.classList.toggle('page_color_hide'));
switcher.addEventListener('mouseover' , ()=> {
	cog.classList.remove('cogRot2');
	cog.classList.add('cogRot1');

})
switcher.addEventListener('mouseout' , ()=> {
	cog.classList.remove('cogRot1');
	cog.classList.add('cogRot2');

})


colors.addEventListener('click' , function(e) {
	let k = e.target.id;
	if(e.target.classList.contains('color')) {
		for(var i = 0; i < toolbarColor.length; i++) {
		toolbarColor[i].innerHTML = "";
			}
		e.target.innerHTML = '<i class="fas fa-check"></i>';
		for(var i = 0; i < cChange.length; i++) {
			cChange[i].style.setProperty('--primary-color', k);
		}
	}
	
})