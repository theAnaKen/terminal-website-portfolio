import QuerySelector from "../utility/QuerySelector";
import password from "./Password";
import username from "./Username";
const Resize = () => {
	const latestDiv = QuerySelector(".container #login div:last-child input");

	// if (!username || !password) {

	let width = 1;

	latestDiv.addEventListener("keypress", (e) => {
		if (e.key === "enter") return;
		width++;
		latestDiv.style.width = `${width}ch`;
		console.log(latestDiv.style);
	});

	console.log(latestDiv);
	// }
};
export default Resize;
