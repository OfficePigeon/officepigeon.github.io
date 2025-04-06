



function ToggleBetween(checkbox, first, second) {
	if (first == null) checkbox.checked = false;
	let show = (element) => {
		if (element.hasAttribute("hidden")) {
			element.removeAttribute("hidden");
		}
	}
	let hide = (element) => {
		element.setAttribute("hidden", "hidden");
	}
	if (checkbox.checked) {
		show(first);
		hide(second);
	}
	else {
		hide(first);
		show(second);
	}
}

