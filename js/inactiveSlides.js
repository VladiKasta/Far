export default function inactiveSlides(swiper) {
	const sliderListImages = document.querySelectorAll(".product__slide > img")
	const inactiveItemsImages = document.querySelector(".swiper-inactive-items__wrapper")

	sliderListImages.forEach((image, index) => {
		if (index >= 5) return // ограничиваем 5 миниатюрами

		const container = document.createElement("div")

		const img = document.createElement("img")
		img.src = image.src
		img.alt = image.alt || ""

		/* 		if (index === 0) {
			container.classList.add("active")
		} */

		container.appendChild(img)
		inactiveItemsImages.appendChild(container)
	})
}

//# sourceMappingURL=inactiveSlides.js.map
