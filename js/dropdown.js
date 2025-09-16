export default function dropdownTrigger() {
	const dropdowns = document.querySelectorAll("#dropdown-item")
	const overlay = document.getElementById("overlay")

	const dropdownSecondLevelWindow = document.querySelector(".dropdown-docs-item-second")

	// проходмся по всем dropdown
	dropdowns.forEach(dropdown => {
		let dropdownItem = document.querySelector(`.${dropdown.dataset.dropdownTarget}`)
		let secondMenuLinks = dropdownItem.querySelectorAll(".catalog-item_card-content > a")
		let scrollHeight = null
		let secondWindowBackTitle = dropdownSecondLevelWindow.querySelector("#second-window-title")
		const arrow = dropdown.querySelector("svg")

		const backBtn = dropdownSecondLevelWindow.querySelector(".back__btn-container")

		// нажатие на dropdown
		dropdown.addEventListener("click", () => {
			dropdownItem.classList.toggle("active")

			// высота dropdown для того чтобы второй уровень совпадал высотой с первым
			scrollHeight = dropdownItem.scrollHeight

			// переключение стрелки
			if (dropdownItem.classList.contains("active")) {
				arrow.style.transform = "rotate(180deg)"
				overlay.classList.toggle("active")
			} else {
				arrow.style.transform = "rotate(0deg)"
				overlay.classList.toggle("active")
			}
		})

		// нажатие на второй уровень
		secondMenuLinks.forEach(link => {
			// обрабочик ссылок на первом уровне
			link.addEventListener("click", () => {
				// назначение заголовка втрого уровня и задание высоты
				secondWindowBackTitle.textContent = link.textContent
				dropdownSecondLevelWindow.classList.toggle("active")
				dropdownSecondLevelWindow.style.minHeight = scrollHeight + "px"
			})

			backBtn.addEventListener("click", () => {
				dropdownSecondLevelWindow.classList.remove("active")
			})
		})
	})
}

//# sourceMappingURL=dropdown.js.map
