export default function accordionTrigger() {
	const accordionItems = document.querySelectorAll("#catalog-accordion-burger")

	accordionItems.forEach(item => {
		item.addEventListener("click", e => {
			item.nextElementSibling.classList.toggle("active")
			let scrollHeight = item.nextElementSibling.scrollHeight

			if (item.nextElementSibling.classList.contains("active")) {
				item.nextElementSibling.style.maxHeight = scrollHeight + "px"
			} else {
				item.nextElementSibling.style.maxHeight = 0 + "px"
			}
		})
	})
}

//# sourceMappingURL=accordion.js.map
