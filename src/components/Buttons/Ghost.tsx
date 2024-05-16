import { Button } from "../ui/button";

interface props {
  name: string;
}

const Ghost = ({name} : props) => {
  return (
    <Button variant={"ghost"} className="ghost">
      {name}
    </Button>
  );
};

export default Ghost;
