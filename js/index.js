import accordionTrigger from "./accordion.js"
import accordionFooter from "./accordionFooter.js"
import burgerTrigger from "./burger.js"
import changeActiveSlide from "./changeActiveSlide.js"
import dropdownTrigger from "./dropdown.js"
import inactiveSlides from "./inactiveSlides.js"
import inputFocused from "./inputIcon.js"
import sliderMap from "./sliderMap.js"
import initSwiper from "./swiper.js"

document.addEventListener("DOMContentLoaded", function () {
	inputFocused()
	burgerTrigger()
	dropdownTrigger()
	accordionTrigger()
	initSwiper()
	accordionFooter()
	inactiveSlides()
	sliderMap(initSwiper())

	changeActiveSlide(initSwiper())

	/* scrollBlock() */
})

//# sourceMappingURL=index.js.map
