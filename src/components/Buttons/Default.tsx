import { Button } from "../ui/button";
import "./Buttons.css";

interface props {
  name: any;
}

const Default = ({name}: props) => {
  return (
    <Button variant={"default"} className="default">
      {/* Join Us <img src={arrow} alt="" /> */}
      {name}
    </Button>
  );
};

export default Default;
