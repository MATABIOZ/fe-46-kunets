//* burger and sidebar

const headerBurger = document.querySelector('.header__burger')
const sidebar = document.querySelector('.sidebar')

headerBurger.addEventListener('click', function (a) {
	a.preventDefault();
	if (this.classList.contains('header__burger_checked')) {
		this.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
	}
	else {
		this.classList.add('header__burger_checked');
		sidebar.classList.add('sidebar_checked');
	}
})

document.querySelector('.sidebar__nav-item:nth-child(1) > a').addEventListener('click', function (a) {
	a.preventDefault();
		headerBurger.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
})
document.querySelector('.sidebar__nav-item:nth-child(2) > a').addEventListener('click', function (a) {
	a.preventDefault();
		headerBurger.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
})
document.querySelector('.sidebar__nav-item:nth-child(3) > a').addEventListener('click', function (a) {
	a.preventDefault();
		headerBurger.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
})
document.querySelector('.sidebar__nav-item:nth-child(4) > a').addEventListener('click', function (a) {
	a.preventDefault();
		headerBurger.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
})
document.querySelector('.sidebar__nav-item:nth-child(5) > a').addEventListener('click', function (a) {
	a.preventDefault();
		headerBurger.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
})
document.querySelector('.header__axit-logo > a').addEventListener('click', function (a) {
	a.preventDefault();
		headerBurger.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
})

//* slider

const reviewsCards = document.querySelector('.reviews__cards')
const sliderButtonLeft = document.querySelector('.slider__button:nth-child(1)')
const sliderButtonCenter = document.querySelector('.slider__button:nth-child(2)')
const sliderButtonRight = document.querySelector('.slider__button:nth-child(3)')

sliderButtonLeft.addEventListener('click', function (a) {
	a.preventDefault();
		this.classList.add('slider__button_active');
		sliderButtonCenter.classList.remove('slider__button_active');
		sliderButtonRight.classList.remove('slider__button_active');
		reviewsCards.classList.add('reviews__cards_left');
		reviewsCards.classList.remove('reviews__cards_center');
		reviewsCards.classList.remove('reviews__cards_right');
})
sliderButtonCenter.addEventListener('click', function (a) {
	a.preventDefault();
		this.classList.add('slider__button_active');
		sliderButtonLeft.classList.remove('slider__button_active');
		sliderButtonRight.classList.remove('slider__button_active');
		reviewsCards.classList.add('reviews__cards_center');
		reviewsCards.classList.remove('reviews__cards_left');
		reviewsCards.classList.remove('reviews__cards_right');
})
sliderButtonRight.addEventListener('click', function (a) {
	a.preventDefault();
		this.classList.add('slider__button_active');
		sliderButtonLeft.classList.remove('slider__button_active');
		sliderButtonCenter.classList.remove('slider__button_active');
		reviewsCards.classList.add('reviews__cards_right');
		reviewsCards.classList.remove('reviews__cards_left');
		reviewsCards.classList.remove('reviews__cards_center');
})