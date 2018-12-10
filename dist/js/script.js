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
