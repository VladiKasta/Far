export default function burgerTrigger() {
	const burgerWrapper = document.querySelector(".burger__wrapper")
	const burgerMenu = document.querySelector(".header__burger")
	const burgerItems = document.querySelector(".burger-menu")

	if (burgerWrapper) {
		burgerWrapper.addEventListener("click", function () {
			burgerMenu.classList.toggle("active")
			burgerItems.classList.toggle("active")
			document.body.classList.toggle("noscroll")
		})
	}
}

//# sourceMappingURL=burger.js.map
