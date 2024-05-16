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
  return (
    <div className="navbar flex justify-between w-full px-[10%] py-5">
      <div className="left flex justify-center items-center gap-14 font-sans font">
        <a href="#" className="logo font-bold text-2xl">
          {logo}
        </a>
        <ul className="flex justify-center items-center gap-5">
          {listItems.map((e, i) => (
            <li key={i}>
              <a href="#">{e}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="right flex jus items-center gap-5">
        <Ghost name="Login" />
        <JoinUsButton name={`Join Us`} />
      </div>
    </div>
  );
};

export default Navbar;
