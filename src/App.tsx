import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupForm } from "./components/Register/Register";
<<<<<<<<< Temporary merge branch 1
import Ourteam from "./components/ourteam/ourteam";

function App() {
	return (
		<Routes>
			<Route element={<SignupForm />} path="*" />
			<Route element={<Ourteam	/>} path="doctors"/>
		</Routes>
=========
import Showcase from "./components/Showcase/Showcase";
import { Statistics } from "./components/Statistics/Statistics";
import { Meet } from "./components/Meet/Meet";
import Services from "./components/med-services/Services";

function App() {
	return (
		<>
			<Showcase />
			<Statistics />
			<Meet />
			<Services />
			<Routes>
				<Route element={<SignupForm />} path="/login" />
			</Routes>
		</>
>>>>>>>>> Temporary merge branch 2
	);
}

export default App;
