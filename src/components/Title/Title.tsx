import React, { FC } from "react";
import "./Title.css";
import { Link } from "react-router-dom";

interface Props {
  types?: string;
  header: string;
  headline: string;
  subHeadline: string;
  link?: string;
}

const Title: FC<Props> = (props) => {
  return (
    <div
      className={`title ${
        props.types?.replaceAll(" ", "").split(",")[0] == "showcase"
          ? "title-showcase"
          : ""
      }`}
    >
      <h2
        className={`title__header ${
          props.header == "line" ? "title__line" : ""
        }`}
      >
        {props.header == "line" ? null : props.header}
      </h2>
      <h1
        className={`title__headline ${
          props.types?.replaceAll(" ", "").split(",")[0] == "showcase" &&
          props.types?.replaceAll(" ", "").split(",")[1] != "normal_headline"
            ? "title-showcase__headline"
            : ""
        }`}
      >
        {props.headline}
      </h1>
      <p className="title__subhead">{props.subHeadline}</p>
      {props.link && (
        <Link className="title__link" to={props.link}>
          Learn More {">"}
        </Link>
      )}
    </div>
  );
};

export default Title;
