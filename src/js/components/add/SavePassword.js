import Clear from "../../utility/Clear";
import getElementById from "../../utility/GetElementById";
import QuerySelector from "../../utility/QuerySelector";
import HandlePassword from "../HandlePassword";
import Resize from "../ResizeInput";
let loginDiv = getElementById("login");

// console.log(loginDiv);
const SavePassword = () => {
	const passwordDiv = QuerySelector(".password", loginDiv);
	const passwordInputField = QuerySelector("input", passwordDiv);

	// console.log(passwordDiv, passwordInputField);

	passwordInputField.addEventListener(
		"blur",
		(e) => {
			HandlePassword();
			Resize();

			setTimeout(() => {
				Clear(loginDiv);
			}, 900);
		},
		{ once: true },
	);

	passwordInputField.addEventListener(
		"keypress",
		(e) => {
			// console.log(e);

			if (e.key === "Enter") {
				HandlePassword();
				Resize();
			}

			setTimeout(() => {
				Clear(loginDiv);
			}, 1000);
		},
		// { once: true },
	);
};
export default SavePassword;
