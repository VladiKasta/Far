export default function changeActiveSlide(swiper) {
	const thumbs = document.querySelectorAll(".swiper-inactive-items__wrapper > div")

	thumbs.forEach((thumb, index) => {
		thumb.addEventListener("click", () => {
			swiper.slideToLoop(index)
		})
	})
}

//# sourceMappingURL=changeActiveSlide.js.map
