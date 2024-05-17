import { Button } from "../ui/button";


export default function Doctorscard(){
    return(
        <>
        <div className="bg-slate-400 w-1/3 rounded-3xl mt-7">
            <div className="w-full " >
                <img className="w-full rounded-t-3xl" src="/doctors/user-cover-1.png" alt="" />
            </div>
            <div className="text-center mt-5 mb-4">
                <h2>Julian Jameson</h2>
                <p>Profession</p>
            </div>
            <div className="">
                <img src="/doctors/f.png" alt="f" />
                <img src="/doctors/instagram.png" alt="f" />
                <img src="/doctors/twitter.png" alt="f" />
            
            </div>
        </div>
        </>
    )
}