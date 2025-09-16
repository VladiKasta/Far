export default function sliderMap(swiper) {
	const inactiveItemsImagesNodeList = document.querySelectorAll(
		".swiper-inactive-items__wrapper > div"
	)
	let inactiveItemsImages = Array.from(inactiveItemsImagesNodeList)

	// начальное состояние

	/* 	if (inactiveItemsImages.length) inactiveItemsImages[0].classList.add("active") */

	// swiper.realIndex — индекс текущего слайда (0-based)
	const index = swiper.realIndex
	console.log(index)

	// очистка
	inactiveItemsImages.forEach(item => item.classList.remove("active"))

	// установка active
	const target = inactiveItemsImages[index]
	if (target) target.classList.add("active")
}

//# sourceMappingURL=sliderMap.js.map
