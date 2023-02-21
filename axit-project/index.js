//* burger and sidebar

const headerBurger = document.querySelector('.header__burger')
const sidebar = document.querySelector('.sidebar')

headerBurger.addEventListener('click', (event) => {
	headerBurger.classList.toggle('header__burger_checked');
	sidebar.classList.toggle('sidebar_checked');
})

const allLinks = document.querySelectorAll("a")

allLinks.forEach(item => item.addEventListener('click', (event) => {
		headerBurger.classList.remove('header__burger_checked');
		sidebar.classList.remove('sidebar_checked');
}))

//* slider

const sliderControl = document.querySelector(".slider__control")
const sliderControlButtons = document.querySelectorAll(".slider__control button")
const reviewsCards = document.querySelector('.reviews__cards')

sliderControl.addEventListener('click', (event) => {
	if (event.target.tagName === "BUTTON"){
		sliderControlButtons.forEach(item => item.classList.remove('slider__button_active'));
		event.target.classList.add('slider__button_active');
		reviewsCards.setAttribute("style", `transform: translateX(${event.target.attributes[1].value})`);
	}
})