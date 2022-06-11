import GetElementById from "../utility/GetElementById";
import QuerySelector from "../utility/QuerySelector";
import Password from "./Password";
import SavePassword from "./add/SavePassword";

const HandleUsername = () => {
	const usernameDiv = QuerySelector(".username");
	const usernameInputField = QuerySelector("input", usernameDiv);
	usernameInputField.focus();
	let loginDiv = GetElementById("login");

	let usernameToSave = usernameInputField.value;
	localStorage.setItem("username", usernameToSave);
	loginDiv.innerHTML += Password;
	// input getting blank is totally a feature :)

	setTimeout(() => {
		usernameInputField.removeAttribute("autofocus");
		SavePassword();
	}, 1000);
};

export default HandleUsername;
