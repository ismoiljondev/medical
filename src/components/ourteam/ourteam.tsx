import Doctorscard from "../doctorscard/doctorscard";


export default function Ourteam(){
    return(
        <>
        <h1>Our team</h1>
        <div>
            <div className="w-4/5 mx-auto my-0">
                
                <div className="flex  items-center justify-between">
                 <Doctorscard />
                 <Doctorscard/>
                 <Doctorscard/>
                 <Doctorscard/>

                </div>
            </div>
        </div>
        </>
    )
}