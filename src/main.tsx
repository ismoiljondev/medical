import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import call from "../public/Footer/Vector.png";
import dot from "../public/Footer/Vector (1).png";
import mail from "../public/Footer/Vector (2).png";
const data = [
	{
		mainName: "Company Info",
		list: ["About Us", "About Us", "About Us", "About Us"],
	},
	{
		mainName: "Company Info",
		list: ["About Us", "About Us", "About Us", "About Us"],
	},
	{
		mainName: "Company Info",
		list: ["About Us", "About Us", "About Us", "About Us"],
	},
	{
		mainName: "Company Info",
		list: ["About Us", "About Us", "About Us", "About Us"],
	},
	{
		mainName: "Get In Touch",
		list: [
			<div>
				<div className="img">
					<img src={call} alt="" className="call" />
				</div>
				(480) 555-0103
			</div>,
			<div>
				<div className="img">
					<img src={dot} alt="" className="dot" />
				</div>
				4517 Washington Ave. Manchester, Kentucky 39495
			</div>,
			<div>
				<div className="img">
					<img src={mail} alt="" className="mail" />
				</div>
				debra.holt@example.com
			</div>,
		],
	},
];

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar
				listItems={["About", "Home", "Nimadur"]}
				logo="Medical"
				key={1}
			/>
			<App />
			<Footer lists={data} />
		</BrowserRouter>
	</React.StrictMode>
);
