const cosasQueAprendimos = [
	{
		tema: "terminal",
		class: "",
	},
	{
		tema: "node",
		class: "",
	},
	{
		tema: "oop",
		class: "",
	},
	{
		tema: "typescript",
		class: "",
	},
	{
		tema: "css",
		class: "",
	},
	{
		tema: "dom",
		class: "special",
	},
];

function main() {
	const listaEl = document.querySelector(".lista");
	const liListaEl = document.querySelectorAll(".lista li");

	liListaEl.forEach((li) => li.remove());

	cosasQueAprendimos.forEach((li) => {
		const listItemEl = document.createElement("li");
		listItemEl.textContent = `Tema: ${li["tema"]}`;
		listItemEl.className = li["class"];
		return listaEl.appendChild(listItemEl);
	});
}

main();
