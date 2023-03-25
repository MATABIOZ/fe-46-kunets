const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener('click', () => {
	panels.forEach(panel => panel.classList.remove('panel_checked'));
	panel.classList.add('panel_checked');
}))