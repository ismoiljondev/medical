import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupForm } from "./components/Register/Register";
import Ourteam from "./components/ourteam/ourteam";

function App() {
	return (
		<Routes>
			<Route element={<SignupForm />} path="*" />
			<Route element={<Ourteam	/>} path="doctors"/>
		</Routes>
	);
}

export default App;
