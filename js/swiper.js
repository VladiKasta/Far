import sliderMap from "./sliderMap.js"

export default function initSwiper() {
	const mainSwiper = new Swiper(".main__swiper", {
		// Optional parameters

		slidesPerView: 1,
		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		on: {
			slideChange(swiper) {
				sliderMap(swiper)
			},
		},

		breakpoints: {
			// when window width is >= 320px
			380: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
			},
		},
	})

	const modelSwiper = new Swiper(".model__swiper", {
		// Optional parameters
		loop: true,
		slidesPerView: 2.5,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			type: "bullets", // 'bullets' | 'fraction' | 'progressbar' | 'custom'
			clickable: true,
		},
		// Navigation arrows

		navigation: {
			nextEl: ".model-swiper-next",
			prevEl: ".model-swiper-prev",
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 5,
			},
			380: {
				slidesPerView: 1.1,
				spaceBetween: 10,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1.1,
				spaceBetween: 10,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1.1,
			},

			992: {
				slidesPerView: 1.5,
			},

			1280: {
				slidesPerView: 2.5,
			},
		},
	})

	return mainSwiper
}

//# sourceMappingURL=swiper.js.map
