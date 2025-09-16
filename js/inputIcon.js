export default function inputFocused() {
	const icons = document.querySelectorAll("#input-icon")

	icons.forEach(icon => {
		const inputField = document.querySelector(`#${icon.dataset.focus}`)
		icon.addEventListener("click", () => {
			inputField.focus()
		})

		console.log(inputField)
	})
}

//# sourceMappingURL=inputIcon.js.map
