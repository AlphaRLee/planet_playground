function populateLayoutSelector() {
	const layoutSelector = document.getElementById("layout-selector");
	const layoutOptionsTemplate = document
		.getElementById("layout-options-template")
		.content.querySelector("a");
	layouts.forEach((layout, index) => {
		const layoutOption = layoutOptionsTemplate.cloneNode(true);
		layoutOption.id = `layout-option-${index}`;
		layoutOption.innerText = layout.name;
		layoutOption.onclick = () =>
			onLayoutOptionClick(layoutOption.id, index);
		layoutSelector.appendChild(layoutOption);
	});

	selectedLayout = layouts[0];
	document.getElementById("layout-selector-btn").innerText =
		selectedLayout.name;
}

function onLayoutOptionClick(layoutOptionId, layoutIndex) {
	console.log("Clicky!", layoutOptionId, layoutIndex);
	const layout = layouts[layoutIndex];
	document.getElementById("layout-selector-btn").innerText = layout.name;
	setupPlanets(layout);
}
