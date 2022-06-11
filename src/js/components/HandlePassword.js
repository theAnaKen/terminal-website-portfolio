import QuerySelector from "../utility/QuerySelector";
import getElementById from "../utility/GetElementById";
let loginDiv = getElementById("login");

const HandlePassword = () => {
	const passwordDiv = QuerySelector(".password", loginDiv);
	const passwordInputField = QuerySelector("input", passwordDiv);
	passwordInputField.focus();
	let passwordToSave = passwordInputField.value;
	localStorage.setItem("password", passwordToSave);

	// setTimeout(() => {
	// 	passwordInputField.value = "";
	// }, 100);
};

export default HandlePassword;
