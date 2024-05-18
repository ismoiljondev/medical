import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupForm } from "./components/Register/Register";
import Showcase from "./components/Showcase/Showcase";
import { Statistics } from "./components/Statistics/Statistics";

function App() {
	return (
		<>
			<Showcase />
			<Statistics />
			<Routes>
				<Route element={<SignupForm />} path="/login" />
			</Routes>
		</>
	);
}

export default App;
