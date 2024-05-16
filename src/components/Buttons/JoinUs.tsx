import { Button } from "../ui/button";
import "./Buttons.css";
import arrow from "../../../public/Navbar/icn arrow-right .icn-xs.png";

interface props {
  name: any;
}

const JoinUsButton = ({ name }: props) => {
  return (
    <Button variant={"default"} className="default">
      {name} <img src={arrow} alt="" />
    </Button>
  );
};

export default JoinUsButton;
