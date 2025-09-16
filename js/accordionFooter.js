export default function accordionFooter() {
	const accordionItems = document.querySelectorAll(".footer__nav-item")

	accordionItems.forEach(item => {
		console.log(item)
		item.addEventListener("click", e => {
			let content = item.querySelector(".footer-accordion__content")
			let arrow = item.querySelector(".footer-accordion__title > svg")

			content.classList.toggle("active")
			let scrollHeight = content.scrollHeight

			if (content.classList.contains("active")) {
				content.style.maxHeight = scrollHeight + "px"
				arrow.style.transform = "rotate(180deg)"
			} else {
				content.style.maxHeight = 0 + "px"
				arrow.style.transform = "rotate(0deg)"
			}
		})
	})
}

//# sourceMappingURL=accordionFooter.js.map
