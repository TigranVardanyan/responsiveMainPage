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
var resizeTimeout; // для ограничения частоты ресайза

//вывод цвета с локалсторидж --------- перенесен в sidebar.php
// document.addEventListener("DOMContentLoaded", () => {
// 	if(localStorage.getItem('targetColor')) {
//
// 	} else {
// 		localStorage.setItem('targetColor' , "#2196F3")
// 	}
// 	for(var i = 0; i < toolbarColor.length; i++) {
// 		toolbarColor[i].innerHTML = "";   //удаляет все "птички" с цветов
// 	}
// 	console.log(localStorage.getItem('targetColor'));
// 	document.getElementById(localStorage.getItem('targetColor')).innerHTML = '<i class="fas fa-check"></i>';
// 	for(var i = 0; i < cChange.length; i++) {  // всем элементам с классом cChange устанавливает css переменной
// 		cChange[i].style.setProperty('--primary-color', localStorage.getItem('targetColor')); // --primary-color значение k(выбранный цвет)
// 	}
// });


window.onresize = function() {
	if (resizeTimeout) {
		clearTimeout(resizeTimeout);
	}
	resizeTimeout = setTimeout(resize
	, 500);
};

document.addEventListener("DOMContentLoaded", resize);


function resize() {
	windowSize = window.innerWidth;
	if(windowSize < 992) {
		wrapper.classList.add('container-fluid');
		wrapper.classList.remove('container');
	} else {
		wrapper.classList.remove('container-fluid');
		wrapper.classList.add('container');
	}
	if (windowSize < 768) {
		pageColor.classList.remove('page_color_hide');
	}  else {
		pageColor.classList.add('page_color_hide');
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



switcher.addEventListener('click' , ()=> pageColor.classList.toggle('page_color_hide')); //при клике открыть
																							// закрыть цветовую панель
switcher.addEventListener('mouseover' , ()=> {    // анимация при hover in
	cog.classList.remove('cogRot2');
	cog.classList.add('cogRot1');

})
switcher.addEventListener('mouseout' , ()=> {    // анимация при hover out
	cog.classList.remove('cogRot1');
	cog.classList.add('cogRot2');

})

colors.addEventListener('click' , function(e) {
	localStorage.setItem('targetColor', e.target.id);
	// console.log(localStorage.getItem('targetColor'))
	let k = e.target.id;       // получает в k id таргета(в id у нас записан цвет)
	if(e.target.classList.contains('color')) {
		for(var i = 0; i < toolbarColor.length; i++) {
		toolbarColor[i].innerHTML = "";   //удаляет все "птички" с цветов
			}
		e.target.innerHTML = '<i class="fas fa-check"></i>'; // добавляет "птичку" к таргету
		for(var i = 0; i < cChange.length; i++) {  // всем элементам с классом cChange устанавливает css переменной
			cChange[i].style.setProperty('--primary-color', k); // --primary-color значение k(выбранный цвет)
		}
	}
})



