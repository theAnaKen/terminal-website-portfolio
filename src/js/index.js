import username from "./components/Username";
import GetElementById from "./utility/GetElementById";

let loginDiv = GetElementById("login");

loginDiv.innerHTML += username;

console.log(loginDiv);

// console.log(parentContainer, buttons, login);

// console.log(Username, password);
