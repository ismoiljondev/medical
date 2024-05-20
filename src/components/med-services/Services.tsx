import Title from "../Title/Title.tsx";
import Card from "./Card.tsx";

function Services() {
	return (
		<div className="container bg-azure border w-[clamp(300px,100%,1440px)] py-[clamp(20px,11%,160px)] mx-auto">
			<div className="flex flex-col gap-4">
				<Title
					types="Services"
					header="Practice Advice "
					headline="Our Department"
					subHeadline="Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics"
				/>
				<div className="grid grid-cols-3 gap-4">
					<Card /* first */ />
					<Card /* second */ />
					<Card /* third */ />
				</div>
			</div>
		</div>
	);
}

export default Services;
