import { Button } from "../ui/button";
import "./Buttons.css";

interface props {
  name: any;
}

const Outline = ({name}: props) => {
  return (
    <Button variant={"default"} className="outline-def">
      {name}
    </Button>
  );
};

export default Outline;
