import Title from "../Title/Title";
import Doctorscard from "../doctorscard/doctorscard";

interface Props{}

export default function Ourteam(props:Props){
    return(
        <>
        <div className="pt-40 pb-40">
            <div className="w-4/5 mx-auto my-0">
                <Title className="mb-24" subHeadline="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "  headline="Our Team" header="Team"/>
                
                <div className="flex max-xl:flex-wrap max-sm:justify-center items-center justify-between">
                 <Doctorscard img='/doctors/user-cover-1.png' name="Julian Jameson"/>
                 <Doctorscard img='/doctors/user-cover-2.png' name="Monika Mare"/>
                 <Doctorscard img='/doctors/user-cover-3.png' name="Jon Dep"/>
                 <Doctorscard img='/doctors/user-cover-4.png' name="Anna De Armz"/>

                </div>
            </div>
        </div>
        </>
    )
}