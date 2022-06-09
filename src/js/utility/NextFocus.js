import QuerySelector from "./QuerySelector";

const UpdateFocus = () => {
	let container = QuerySelector(".container");

	container.lastChild.focus();
};

export default UpdateFocus;
