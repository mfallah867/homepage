'use strict';

// Navbar item highlight
const navItem = document.querySelector(`.nav-link[href='#']`);

navItem.addEventListener('click', function (e) {
	e.preventDefault();
});

const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', function () {
	document.body.classList.toggle('open');
});

// Login Modal
const loginBtn = document.querySelector('.login a');
const modalCloseBtn = document.querySelector('.close-btn');
const backDrop = document.querySelector('.backdrop');

loginBtn.addEventListener('click', function () {
	document.body.classList.add('open-modal');
});

const closeModal = function () {
	document.body.classList.remove('open-modal');
};

modalCloseBtn.addEventListener('click', closeModal);
backDrop.addEventListener('click', closeModal);

// Animated card
const callbackFn = function (entries, observer) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) return;

		const targetElement = entry.target;
		targetElement.classList.remove('post-card--initial');
		observer.unobserve(targetElement);
	});
};

const cardElements = document.querySelectorAll('.post-card');
const observer = new IntersectionObserver(callbackFn, {
	threshold: 0.7,
});

cardElements.forEach(element => {
	observer.observe(element);
});
