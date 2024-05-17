import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupForm } from "./components/login/login";
import Doctorscard from "./components/doctorscard/doctorscard";

function App() {
	return (
		<Routes>
			<Route element={<SignupForm />} path="*" />
			<Route element={<Doctorscard/>} path="doctors"/>
		</Routes>
	);
}

export default App;
