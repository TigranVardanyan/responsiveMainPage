var pages = document.querySelector('.navbar ul');
var link = document.querySelectorAll('.navbar ul li');
var page = document.querySelectorAll('.page');
var home = document.querySelectorAll('.home');
var portfolio = document.querySelectorAll('.portfolio');
var service = document.querySelectorAll('.service');
var resumeblog = document.querySelectorAll('.resumeblog');
var blog = document.querySelectorAll('.blog');
var contact = document.querySelectorAll('.contact');
var extra = document.querySelectorAll('.extra');



link[0].addEventListener('click' , function(e) {
	for(var i = 0; i < page.length; i++) {
		page[i].classList.remove('current_page_show');
		page[i].classList.add('current_page_hide');
	}
	for(var i = 0; i < home.length; i++) {
		home[i].classList.remove('current_page_hide');
		home[i].classList.add('current_page_show');
	}
})

link[1].addEventListener('click' , function(e) {
	for(var i = 0; i < page.length; i++) {
		page[i].classList.remove('current_page_show');
		page[i].classList.add('current_page_hide');
	}
	for(var i = 0; i < portfolio.length; i++) {
		portfolio[i].classList.remove('current_page_hide');
		portfolio[i].classList.add('current_page_show');
	}
})

link[2].addEventListener('click' , function(e) {
	for(var i = 0; i < page.length; i++) {
		page[i].classList.remove('current_page_show');
		page[i].classList.add('current_page_hide');
	}
	for(var i = 0; i < home.length; i++) {
		home[i].classList.remove('current_page_hide');
		home[i].classList.add('current_page_show');
	}
})

link[3].addEventListener('click' , function(e) {
	for(var i = 0; i < page.length; i++) {
		page[i].classList.remove('current_page_show');
		page[i].classList.add('current_page_hide');
	}
	for(var i = 0; i < home.length; i++) {
		home[i].classList.remove('current_page_hide');
		home[i].classList.add('current_page_show');
	}
})

link[4].addEventListener('click' , function(e) {
	for(var i = 0; i < page.length; i++) {
		page[i].classList.remove('current_page_show');
		page[i].classList.add('current_page_hide');
	}
	for(var i = 0; i < home.length; i++) {
		home[i].classList.remove('current_page_hide');
		home[i].classList.add('current_page_show');
	}
})

link[5].addEventListener('click' , function(e) {
	for(var i = 0; i < page.length; i++) {
		page[i].classList.remove('current_page_show');
		page[i].classList.add('current_page_hide');
	}
	for(var i = 0; i < home.length; i++) {
		home[i].classList.remove('current_page_hide');
		home[i].classList.add('current_page_show');
	}
})