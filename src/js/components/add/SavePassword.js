import getElementById from "../../utility/GetElementById";
import QuerySelector from "../../utility/QuerySelector";
let loginDiv = getElementById("login");

console.log(loginDiv);
const SavePassword = () => {
	const passwordDiv = QuerySelector(".password", loginDiv);
	const passwordInputField = QuerySelector("input", passwordDiv);

	console.log(passwordDiv, passwordInputField);

	passwordInputField.addEventListener(
		"blur",
		(e) => {
			let passwordToSave = passwordInputField.value;
			localStorage.setItem("password", passwordToSave);
		},
		{ once: true },
	);
};
export default SavePassword;
