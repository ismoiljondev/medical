import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignupForm } from "./components/login/login";
import call from "../public/Footer/Vector.png";
import dot from "../public/Footer/Vector (1).png";
import mail from "../public/Footer/Vector (2).png";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

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

function App() {
  return (
    <>
      <Navbar
        logo="MedicalRecov"
        listItems={["Home", "Product", "Pricing", "Contact"]}
      />
      <Routes>
        <Route element={<SignupForm />} path="*" />
      </Routes>
      <Footer lists={data} />
    </>
  );
}

export default App;
