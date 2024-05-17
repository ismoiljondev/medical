import "./Meet.css"
import Title from "../Title/Title"
import { Ghost } from "../Buttons/Buttons"
import MeetImg from "@/img/meet.png"

export const Meet = () => {
    return (
        <section className="meet">
            <div className="container max-w-[1050px] px-0 max-[1280px]:px-5 max-[800px]:px-10+ max-[600px]:grid-cols-1 max-[600px]:flex-col-reverse items-center grid grid-cols-2 max-[600px]:gap-5">

                <div className="meet-left max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center max-[600px]:order-2">
                    <Title
                        types="showcase, normal_headline"
                        header="line"
                        headline="Meet Our Experts"
                        subHeadline="Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: 
                    Newtonian mechanics "
                        className="mb-9 max-[1280px]:gap-7 max-[1280px]:mb-7 max-[1024px]:gap-3 max-[1024px]:mb-3 max-[800px]:gap-2 max-[800px]:mb-2 max-[600px]:text-center max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center"
                    />

                    <Ghost name={'Learn More'} icon={<i className="fa-solid fa-chevron-right"></i>} className="font-[Montserrat] text-[#FF685B] flex 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px]  sm:text-[15px] items-center justify-center gap-2 p-0 hover:bg-transparent font-bold max-[640px]:text-[14px]"></Ghost>
                </div>

                <div className="meet-right max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center w-full max-[600px]:order-1">
                    <img src={MeetImg} alt="" className="max-[600px]:max-w-[400px]" />
                </div>

            </div>
        </section >
    )
}
