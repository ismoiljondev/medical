

export default function Doctorscard(){
    return(
        <>
        <div className="bg-white w-3/11 pb-2 rounded-3xl mt-7 shadow-lg hover:shadow-xl">
            <div className="w-full " >
                <img className="w-full rounded-t-3xl" src="/doctors/user-cover-1.png" alt="" />
            </div>
            <div className="text-center mt-5 mb-4">
                <h2 className="text-blue-900  font-semibold text-xl">Julian Jameson</h2>
                <p className="text-gray-400">Profession</p>
            </div>
            <div className="flex items-center justify-center gap-5 mb-5 ">
                <img src="/doctors/f.png" alt="f" />
                <img src="/doctors/instagram.png" alt="f" />
                <img src="/doctors/twitter.png" alt="f" />
            
            </div>
        </div>
        </>
    )
}