import "./CommitCard.css"
import NoUserImg from "@/img/NoUserImg.png"

interface Props {
    rate: number,
    commit: string,
    authorImg?: any,
    authorName?: string,
    authorRole?: string
}

const CommitCard = ({ rate, commit, authorImg = NoUserImg, authorName = "John Doe", authorRole = "User" }: props) => {

    let stars = [1, 2, 3, 4, 5]

    return (
        <div className="commit-card flex flex-col justify-center items-center max-w-[328px] py-8 max-[600px]:py-6 max-[600px]:border-b">

            <div className="commit-card-rate flex gap-1 text-[#F3CD03] mb-4 max-[720px]:mb-3 max-[600px]:text-[14px]">
                {stars.map((i) => {
                    if ((i - 1) < Math.round(rate)) {
                        return <div><i className="fa-solid fa-star"></i></div>
                    }
                    else {
                        return <div><i className="fa-regular fa-star"></i></div>
                    }
                })}
            </div>

            <div className="commit-card-text text-center max-w-[159px] font-[Montserrat] mb-8 text-[14px] text-[#737373] font-medium max-[720px]:text-[13px] max-[720px]:mb-6 max-[600px]:text-[12px] max-[600px]:mb-4">
                {commit}
            </div>

            <div className="commit-card-author flex items-center justify-center gap-4">
                <div className="commit-card-author-img">
                    <img src={authorImg} alt="" />
                </div>

                <div className="commit-card-author-info font-[Montserrat] font-bold">
                    <h5 className="commit-card-author-info-name text-[#FF685B] text-[14px] max-[600px]:text-[12px]">{authorName}</h5>
                    <p className="commit-card-author-info-role text-[#252B42] text-[12px] max-[600px]:text-[11px]">{authorRole}</p>
                </div>
            </div>

        </div>
    )
}

export default CommitCard;
