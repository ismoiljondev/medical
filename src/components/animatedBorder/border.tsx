import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React from "react";

const Border = ({ children, className }: any) => {
	const radius = 100; // change this to increase the rdaius of the hover effect
	const [visible, setVisible] = React.useState(false);

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: any) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	return (
		<motion.div
			style={{
				background: useMotionTemplate`
radial-gradient(
${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
var(--blue-500),
transparent 80%
)
`,
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className={cn(
				`p-[2px] rounded-lg transition duration-300 group/input`,
				className
			)}
		>
			{children}
		</motion.div>
	);
};

export default Border;
