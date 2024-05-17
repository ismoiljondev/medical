import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupForm } from "./components/Register/login";

function App() {
	return (
		<Routes>
			<Route element={<SignupForm />} path="*" />
			<Route element={<Ourteam/>} path="doctors"/>
		</Routes>
	);
}

export default App;
