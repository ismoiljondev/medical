import { Button } from "../ui/button";
import "./Buttons.css";
import arrow from "../../../public/Navbar/icn arrow-right .icn-xs.png";

interface props {
  name: any,
  icon: any;
}

export const Default = (props: props) => {
  return (
    <Button variant={"default"} className="default" {...props}>
      {/* Join Us <img src={arrow} alt="" /> */}
      {props.name}
    </Button>
  );
};

export const Ghost = (props: props) => {
  return (
    <Button variant={"ghost"} className="ghost" {...props}>
      {props.name} {props.icon}
    </Button>
  );
};

export const JoinUsButton = (props: props) => {
  return (
    <Button variant={"default"} className="default" {...props}>
      {props.name} <img src={arrow} alt="" />
    </Button>
  );
};

export const Outline = (props: props) => {
  return (
    <Button variant={"default"} className="outline-def" {...props}>
      {props.name}
    </Button>
  );
};

export const OutlineRadius = (props: props) => {
  return (
    <Button variant={"default"} className="OutlineRadius-def" {...props}>
      {props.name}
    </Button>
  );
};
