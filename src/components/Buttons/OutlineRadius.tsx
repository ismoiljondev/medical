import { Button } from "../ui/button";
import "./Buttons.css";

interface props {
  name: any;
}

const OutlineRadius = ({name}: props) => {
  return (
    <Button variant={"default"} className="OutlineRadius-def">
      {name}
    </Button>
  );
};

export default OutlineRadius;
