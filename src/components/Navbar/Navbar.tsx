import { useEffect, useState } from "react";
import { Ghost, JoinUsButton } from "../Buttons/Buttons";
import "./Navbar.css";

interface props {
	logo: string;
	listItems: string[];
}

/* <Navbar
        logo="MedicalRecov"
        listItems={["Home", "Product", "Pricing", "Contact"]}
      /> */

//                                  /\
// Bu navbarni chaqirib olish uchun ||

const Navbar = ({ logo, listItems }: props) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	useEffect(() => {
		const body = document.body;
		if (isNavOpen) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "auto";
		}
	}, [isNavOpen]);

	return (
		<>
			<div
				className={`navbar-overlay ${isNavOpen ? "" : "hidden"}`}
				onClick={toggleNav}
			></div>
			<div
				className={`navbar flex justify-between w-full ${
					isNavOpen ? "open" : ""
				}`}
			>
				<div className="mob">
					<a href="#" className="font-bold text-2xl mob-logo">
						{logo}
					</a>
				</div>
				<div className="left flex justify-center items-center gap-14 font-sans font transition-all">
					<a href="#" className="logo font-bold text-2xl">
						{logo}
					</a>
					<ul className="flex justify-center items-center gap-5">
						{listItems.map((e, i) => (
							<li key={i} onClick={toggleNav}>
								<a href="#">{e}</a>
							</li>
						))}
						<Ghost name="Login" />
						<JoinUsButton name={`Join Us`} />
					</ul>
				</div>
				<div className={`right flex jus items-center gap-5`}>
					<Ghost name="Login" />
					<JoinUsButton name={`Join Us`} />
				</div>
				<button
					className="navbar-toggle text-black"
					onClick={toggleNav}
				>
					☰
				</button>
			</div>
		</>
	);
};

export default Navbar;
