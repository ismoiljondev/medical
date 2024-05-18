import Doctorscard from "../doctorscard/doctorscard";

export default function Ourteam() {
	return (
		<>
			<h1>Our team</h1>
			<div>
				<div className="w-4/5 mx-auto my-0">
					<div className="flex max-xl:flex-wrap max-sm:justify-center items-center justify-between">
						<Doctorscard
							img="/doctors/user-cover-1.png"
							name="Julian Jameson"
						/>
						<Doctorscard
							img="/doctors/user-cover-2.png"
							name="Monika Mare"
						/>
						<Doctorscard
							img="/doctors/user-cover-3.png"
							name="Jon Dep"
						/>
						<Doctorscard
							img="/doctors/user-cover-4.png"
							name="Anna De Armz"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
