import { FC, ReactNode } from "react";
import "./Card.css";

interface Props {
	icon: ReactNode;
	title: string;
	className?: string;
}

const Card: FC<Props> = (props) => {
	return (
		<div className={`showcase-card ${props.className}`}>
			<div className="showcase-card__icon">{props.icon}</div>
			<h3 className="showcase-card__title">{props.title}</h3>
			<div className="showcase-card__line"></div>
			<p className="showcase-card__desc">
				The gradual accumulation of information about atomic and
				small-scale behaviour...
			</p>
		</div>
	);
};

export default Card;
