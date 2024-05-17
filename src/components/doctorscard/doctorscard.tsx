interface Props{
    name:string,
    img:string
}

export default function Doctorscard({name,img}:Props){

    return(
        <>
        <div className= "bg-white w-3/11 pb-2  rounded-3xl mt-7 shadow-lg hover:shadow-xl">
            <div className="w-full " >
                <img className="w-full rounded-t-3xl" src={img} alt="" />
            </div>
            <div className="text-center mt-5 mb-4">
                <h2 className="text-blue-900  font-semibold text-xl"> {name}</h2>
                <p className="text-gray-400">Profession</p>
            </div>
            <div className="flex items-center justify-center gap-5 mb-5 ">
                <img className="hover:scale-75" src="/doctors/f.png" alt="f" />
                <img className="hover:scale-75" src="/doctors/instagram.png" alt="f" />
                <img className="hover:scale-75"src="/doctors/twitter.png" alt="f" />
            
            </div>
        </div>
        </>
    )
}