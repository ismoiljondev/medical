import "./App.css";
import { Button } from "./components/ui/button";

function App() {
	return (
		<>
			<Button variant={"customBtn"}>Submit</Button>
			<Button variant={"customBtn"}>Submit</Button>
			<Button variant={"customBtn"}>Submit</Button>
			<Button variant={"customBtn"} className="bg-green-600">
				Submit
			</Button>
			<Button variant={"customBtn"}>Submit</Button>
			<Button variant={"customBtn"}>Submit</Button>
		</>
	);
}

export default App;
